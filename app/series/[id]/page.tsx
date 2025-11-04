/* eslint-disable react/no-unescaped-entities */
"use client";

import { notFound } from "next/navigation";
import { series } from "@/data/series";
import { musiques, Artiste } from "@/data/musiques";
import { chansonsEntendues } from "@/data/chansons-entendues";
import { lieux } from "@/data/lieux";
import { getTagsBySerie } from "@/data/tags";
import { generateSerieJsonLd } from "./metadata";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleHeader from "@/components/ArticleHeader";
import LeadParagraph from "@/components/LeadParagraph";

export default function SerieDetail({ params }: { params: { id: string } }) {
    const serie = series.find((s) => s.id === Number(params.id));
    if (!serie) return notFound();

    const lieu = lieux.find((l) => l.id === serie.lieux);
    const musiquesIds: number[] = serie.musique;
    const artistes = musiques.filter((a: Artiste) =>
        musiquesIds.includes(a.id)
    );
    const entry = chansonsEntendues.find((c) => c.serieId === serie.id);
    const chansons = entry?.chansons ?? [];
    const tags = getTagsBySerie(serie.id);
    const jsonLd = generateSerieJsonLd(params.id);

    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            {/* JSON-LD structured data */}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}

            <Breadcrumb />

            {/* Header éditorial */}
            <ArticleHeader
                category="Séries TV"
                title={serie.title}
                date={serie.years}
                readingTime="10 min read"
                author="Par Gaëlle"
            />

            {/* Titre original */}
            {serie.originalTitle && serie.originalTitle !== serie.title && (
                <motion.p
                    className="text-center italic text-gray-600 mb-8 -mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    ({serie.originalTitle})
                </motion.p>
            )}

            {/* Tags émotionnels */}
            {tags.length > 0 && (
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    {tags.map((tag) => (
                        <Link
                            key={tag.id}
                            href={`/series?tag=${tag.id}`}
                            className={`px-3 py-1 text-xs font-sans font-medium rounded-full border transition-all hover:scale-105 ${tag.color}`}
                            title={tag.description}
                        >
                            {tag.label}
                        </Link>
                    ))}
                </motion.div>
            )}

            {/* Image principale */}
            {serie.image && (
                <motion.div
                    className="relative w-full h-[400px] md:h-[500px] mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Image
                        src={serie.image}
                        alt={`Affiche promotionnelle de la série ${serie.title} (${serie.years})`}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
            )}

            {/* Synopsis comme chapô */}
            <LeadParagraph>{serie.synopsis}</LeadParagraph>

            {/* Liens connexes */}
            <RelatedLinks serieId={serie.id} />

            {/* Contenu principal dans article-body */}
            <div className="article-body">
                {/* Distribution */}
                {serie.casting && (
                    <motion.section
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Distribution principale</h2>
                        <ul className="list-disc list-inside space-y-2 text-[var(--color-dark)]">
                            {serie.casting.map((actor, index) => (
                            <motion.li
                                key={index}
                                className="transition-all duration-200 hover:text-black"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <strong>{actor.actor}</strong> — {actor.character} ({actor.ageAtStart} ans)
                            </motion.li>
                            ))}
                        </ul>
                    </motion.section>
                )}

                {/* Anecdotes */}
                {serie.anecdotes?.length > 0 && (
                    <section className="mb-12">
                        <h2>Anecdotes</h2>
                        <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                            {serie.anecdotes.map((a, i) => (
                            <li key={i}>{a}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Ce que m'a apporté cette série */}
                <section className="mb-12">
                    <h2>Ce que m'a apporté cette série</h2>
                    <div className="text-[var(--color-dark)] leading-relaxed space-y-4">
                        {serie.id === 1 && (
                            <p>
                            Dawson's Creek, c'est sans doute la première série qui m'a donné envie de penser.<br />
                            Pas juste de ressentir, mais de mettre des mots sur ce que je ressentais.<br />
                            Dawson, Joey, Pacey… c'était mes compagnons de bord de mer, dans un monde où on parlait trop, mais si bien.<br />
                            C'est là que j'ai appris qu'on pouvait aimer sans se l'avouer, se déchirer sans se haïr.<br />
                            Le Capeside de Dawson, c'était un refuge pour mon esprit en surchauffe d'ado.<br />
                            Et cette scène du baiser sur le ponton, elle est restée imprimée dans ma mémoire comme un premier amour qu'on n'oublie jamais.<br />
                            Même aujourd'hui, je reviens parfois les voir. Parce que j'ai grandi. Mais eux, non. Et c'est ce qui me rassure.
                            </p>
                        )}
                        {serie.id === 2 && (
                            <p>
                            Les Frères Scott, c'est pas juste une série que j'ai aimée.<br />
                            C'est une série qui m'a construite.<br /><br />
                            Elle m'a donné une famille que je n'avais pas choisie, mais que j'attendais sans le savoir.<br />
                            Elle m'a appris qu'on pouvait changer, tomber, revenir.<br />
                            Que même les pires pères pouvaient pleurer.<br />
                            C'est la première fois que j'ai ressenti qu'un dialogue pouvait me parler comme une chanson.<br />
                            Et justement… cette série m'a ouvert à un monde musical entier. Gavin DeGraw, Joshua Radin, Bethany Joy Lenz, tous ces artistes que je ne connaissais pas, mais qui semblaient avoir mis des mots sur ce que je n'arrivais pas à dire.<br /><br />
                            À l'époque, je gravais les chansons sur des CD pour les écouter en boucle dans ma chambre.<br />
                            Aujourd'hui, je les écoute encore. Et elles me ramènent à moi, à cette ado qui cherchait sa place, qui voulait qu'on la voie, qu'on l'aime, sans trop savoir comment faire.<br /><br />
                            Je reviens souvent à Tree Hill.<br />
                            Pas pour les rebondissements.<br />
                            Mais pour ce mélange de lumière triste, d'amour maladroit et de phrases qui font mal pour de vrai.<br />
                            C'est une série qui parle aux cœurs cabossés. Et moi, le mien a longtemps parlé cette langue-là.
                            </p>
                        )}
                        {serie.id === 3 && (
                            <p>
                            Gilmore Girls, c'est l'une des rares séries qui me fait du bien, sans drame ni tempête.<br />
                            C'est doux, c'est drôle, c'est rapide, c'est brillant.<br />
                            J'ai toujours adoré cette relation mère-fille qui frôle l'amitié, avec ses éclats et ses excès.<br />
                            Mais surtout, cette série m'a donné une sensation de cocon.<br />
                            Stars Hollow, c'est le genre de ville dans laquelle j'aurais aimé vivre.<br />
                            Et Lorelai, avec ses répliques à 200 à l'heure et ses doutes soigneusement cachés, c'était un peu moi – ou celle que je rêvais d'être.<br />
                            Elle m'a appris qu'on pouvait rater, recommencer, se planter, rire quand même, et que le café résolvait tout.
                            </p>
                        )}
                        {serie.id === 4 && (
                            <p>
                            Quand je l'ai regardée pour la première fois, je pensais voir une série légère, presque caricaturale.<br />
                            Mais Desperate Housewives, c'est un chef-d'œuvre d'apparences.<br />
                            Sous les pelouses parfaites et les sourires figés, il y a tout ce que je redoutais chez les adultes : les secrets, les silences, la solitude dans le confort.<br />
                            Cette série m'a montré que chaque femme cache une tempête, même derrière un tablier ou un brushing impeccable.<br />
                            Et moi, je me suis reconnue dans leurs fragilités.<br />
                            Pas parce que j'ai vécu la même chose, mais parce que j'ai ressenti les mêmes manques.<br />
                            Elle m'a appris que les femmes fortes sont souvent celles qui tombent le plus discrètement.
                            </p>
                        )}
                        {serie.id === 5 && (
                            <p>
                            J'ai longtemps dit que je ne regardais pas cette série "pour de vrai".<br />
                            Trop bling-bling, trop superficielle.<br />
                            Mais la vérité, c'est que j'étais fascinée.<br />
                            Fascinée par ce monde de privilèges où tout le monde est paumé.<br />
                            J'ai aimé la cruauté de Blair, le vide de Serena, les colères de Chuck.<br />
                            Mais surtout, cette série m'a montré l'envers du décor.<br />
                            Qu'on peut être belle, riche, admirée, et quand même se sentir seule.<br />
                            C'est une série qui te rappelle que les apparences sont des prisons dorées.<br />
                            Et que parfois, on rêve juste de tout brûler pour ressentir quelque chose de vrai.
                            </p>
                        )}
                        {serie.id === 6 && (
                            <p>
                            Grey's Anatomy, c'est une série que je n'ai jamais regardée "avec légèreté".<br />
                            Chaque épisode est une claque émotionnelle.<br />
                            C'est la série qui m'a appris la perte, la résilience, le chaos du deuil et la beauté des secondes chances.<br />
                            Elle m'a fait pleurer, souvent. Mais elle m'a aussi portée.<br />
                            Parce que dans les couloirs de cet hôpital, il y avait des phrases que j'aurais voulu qu'on me dise.<br />
                            Meredith, malgré son brouillard permanent, m'a toujours semblé terriblement humaine.<br />
                            Grey's Anatomy m'a fait comprendre qu'on pouvait continuer à marcher même avec le cœur en miettes.<br />
                            Et que parfois, la chirurgie la plus urgente… c'est celle qu'on fait sur soi.
                            </p>
                        )}
                        {serie.id === 7 && (
                            <p>
                            Plus intime, plus calme, plus adulte aussi.<br />
                            Private Practice, c'est la série qui m'a appris à regarder mes failles avec tendresse.<br />
                            Addison, si brillante et pourtant si fragile, m'a touchée profondément.<br />
                            J'ai aimé ce cabinet, ce groupe imparfait, ces décisions impossibles.<br />
                            C'est une série qui parle de choix douloureux, de corps blessés, de désirs complexes.<br />
                            Et dans ces histoires, j'ai reconnu mes tiraillements.<br />
                            Elle m'a offert un espace où les émotions n'étaient pas jugées, juste racontées.<br />
                            Et ça, ça fait du bien.
                            </p>
                        )}
                        {serie.id === 8 && (
                            <p>
                            Je ne savais pas qu'une série pouvait aller aussi loin dans le cœur.<br />
                            This Is Us, c'est un uppercut doux.<br />
                            C'est une famille qui n'est pas la mienne, mais que j'ai adoptée sans hésiter.<br />
                            Elle m'a fait pleurer dès le pilote.<br />
                            Et depuis, elle ne m'a jamais laissée indifférente.<br />
                            Cette série, c'est la mémoire, les regrets, les silences, les transmissions.<br />
                            Elle m'a appris que le passé ne meurt jamais, qu'il revient en fragments, en musiques, en odeurs.<br />
                            C'est une série qui m'a réconciliée avec mes émotions.<br />
                            Parce que pour une fois, j'avais le droit de pleurer.<br />
                            Et j'ai pleuré. Vraiment.
                            </p>
                        )}
                    </div>
                </section>

                {/* Section Personnages marquants */}
                <section className="mb-12">
                    <h2>Personnages marquants</h2>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                        {serie.id === 1 && (
                        <>
                            <li><strong>Pacey Witter</strong> : mon doudou absolu. Loyal, drôle, inattendu. Il m'a fait rêver d'un amour doux et libre.</li>
                            <li><strong>Joey Potter</strong> : quand elle est avec Pacey, je l'aime. Elle devient plus humaine, moins prisonnière de ses contradictions.</li>
                            <li><strong>Dawson Leery</strong> : il m'a émue par sa persévérance. Son rêve de cinéma, il l'a tenu jusqu'au bout. Et ça, c'est beau.</li>
                            <li><strong>Andie McPhee</strong> : bouleversante dans ses failles, insupportable par moments… mais je ne peux pas la laisser de côté.</li>
                        </>
                        )}

                        {serie.id === 2 && (
                        <>
                            <li><strong>Brooke Davis</strong> : ma number one. Elle m'a tellement touchée. Derrière son humour, il y a un cœur immense.</li>
                            <li><strong>Julian Baker</strong> : trop souvent moqué, alors qu'il est exceptionnel. Doux, drôle, brillant. Il mérite l'amour du monde entier.</li>
                            <li><strong>Dan Scott</strong> : complexe, abîmé, dérangeant. Il m'a fait réfléchir sur la possibilité du pardon, même pour l'impardonnable.</li>
                        </>
                        )}

                        {serie.id === 3 && (
                        <>
                            <li><strong>Lorelai Gilmore</strong> : c'est moi, quelque part. Forte, drôle, et pleine de blessures qu'on ne montre pas.</li>
                            <li><strong>Luke Danes</strong> : râleur au cœur tendre. Son amour discret pour Lorelai m'a toujours touchée.</li>
                            <li><strong>Jess Mariano</strong> : mon chéri d'amour, mon Jess. Rebelle, perdu, intelligent. Il m'a toujours parlé droit au cœur.</li>
                            <li><strong>Paris Geller</strong> : intense et incomprise. Je l'adore, elle est brillante, agaçante, profondément humaine.</li>
                        </>
                        )}

                        {serie.id === 4 && (
                        <>
                            <li><strong>Bree Van de Kamp</strong> : la plus complexe. Sa carapace de perfection cache des tempêtes intimes.</li>
                            <li><strong>Lynette Scavo</strong> : la plus humaine. Une mère, une battante, une femme qui me touche à chaque épisode.</li>
                            <li><strong>Tom Scavo</strong> : il a été présent, loyal, imparfait. Je l'ai aimé pour ça.</li>
                            <li><strong>Susan Mayer</strong> : maladroite, paumée, touchante. Elle me fait sourire même quand elle m'énerve.</li>
                            <li><strong>Gabrielle Solis</strong> : je l'adore. Superficielle en apparence, mais tellement plus profonde qu'on ne croit.</li>
                            <li><strong>Karen McCluskey</strong> : la mamie qu'on rêve d'avoir. Son franc-parler et sa tendresse m'ont profondément marquée.</li>
                            <li><strong>Mike Delfino</strong> : mon doudou d'amour. Protecteur, mystérieux, juste. Je ne m'en suis jamais remise.</li>
                        </>
                        )}

                        {serie.id === 5 && (
                        <>
                            <li><strong>Blair Waldorf</strong> : mon obsession. Son besoin d'amour caché derrière une carapace acide, c'est tout ce que j'aime.</li>
                            <li><strong>Chuck Bass</strong> : sombre, brisé, irrésistible. Il m'a toujours captivée.</li>
                            <li><strong>Dan Humphrey</strong> : le garçon de l'ombre. Je l'ai aimé pour sa lucidité et ses contradictions.</li>
                        </>
                        )}

                        {serie.id === 6 && (
                        <>
                            <li><strong>Meredith Grey</strong> : je me retrouve en elle. Silencieuse, blessée, mais toujours debout.</li>
                            <li><strong>Miranda Bailey</strong> : je la kiffe, vraiment. Elle est forte, juste, mal jugée au début. Elle a toute mon admiration.</li>
                            <li><strong>Izzie Stevens</strong> : lumineuse, touchante, instable. Elle m'a toujours bouleversée.</li>
                            <li><strong>Alex Karev</strong> : il grogne, il fuit, mais il aime fort. Je l'ai adoré dans toutes ses nuances.</li>
                            <li><strong>Jackson Avery</strong> : le beau boss. Oui, je l'assume. Mais il est aussi bien plus que ça : sensible et sincère.</li>
                        </>
                        )}

                        {serie.id === 7 && (
                        <>
                            <li><strong>Addison Montgomery</strong> : élégante, brillante, perdue. Elle incarne une force douce qui me parle.</li>
                            <li><strong>Cooper Freedman</strong> : drôle, maladroit, loyal. Je l'aime pour son humanité sans prétention.</li>
                        </>
                        )}

                        {serie.id === 8 && (
                        <>
                            <li><strong>Jack Pearson</strong> : pilier, père, homme imparfait et magnifique. Il m'a donné foi en l'amour vrai.</li>
                            <li><strong>Randall Pearson</strong> : il veut tout bien faire, quitte à se perdre. Je comprends ça tellement fort.</li>
                        </>
                        )}
                    </ul>
                </section>

                {/* Scènes cultes */}
                <section className="mb-12">
                    <h2>Scènes cultes</h2>
                    <ul className="list-disc list-inside text-[var(--color-dark)]">

                        {serie.id === 1 && (
                        <>
                            <li>La scène du baiser entre Pacey et Joey sur le bateau – l'instant où tout bascule.</li>
                            <li>Quand Pacey crie à Joey sur le quai qu'il veut être avec elle et personne d'autre.</li>
                            <li>La dernière scène où Dawson réalise son rêve de réalisateur, en hommage à Spielberg.</li>
                        </>
                        )}

                        {serie.id === 2 && (
                        <>
                            <li>La scène finale avec *I Don't Want to Be* chanté par Gavin DeGraw en live – frissons garantis.</li>
                            <li>Julian avouant à Brooke qu'elle est « son tout », juste avant la naissance des jumeaux.</li>
                            <li>La rédemption impossible de Dan face à Nathan et Jamie – déchirant.</li>
                        </>
                        )}

                        {serie.id === 3 && (
                        <>
                            <li>Le discours de Lorelai au mariage de Sookie, quand elle réalise qu'elle est amoureuse de Luke.</li>
                            <li>La première rencontre entre Lorelai et Luke... ou plutôt, leur premier "vrai" baiser (ENFIN).</li>
                            <li>Jess qui laisse à Rory un mot dans *The Subsect* et disparaît – mon cœur s'arrête à chaque fois.</li>
                        </>
                        )}

                        {serie.id === 4 && (
                        <>
                            <li>Mike Delfino mourant dans les bras de Susan, sur fond de voix off – mon doudou parti trop tôt.</li>
                            <li>Gabrielle courant pieds nus dans la rue avec son bébé – mère courage, malgré les apparences.</li>
                            <li>La scène de Karen McCluskey racontant son histoire à Roy, avant de partir – douce et bouleversante.</li>
                        </>
                        )}

                        {serie.id === 5 && (
                        <>
                            <li>Chuck qui dit à Blair : « Trois mots, huit lettres… dis les, et je suis à toi. »</li>
                            <li>Dan révélant qu'il est Gossip Girl – scène choc, quoi qu'on en pense.</li>
                            <li>Blair et Chuck qui se marient à la va-vite, entourés de flics – chaotique et parfait.</li>
                        </>
                        )}

                        {serie.id === 6 && (
                        <>
                            <li>Le monologue de Meredith après la mort de Derek – glaçant, silencieux, inoubliable.</li>
                            <li>Miranda Bailey expliquant à une patiente pourquoi elle a choisi la médecine – puissante, humaine.</li>
                            <li>La scène où Izzie voit Denny dans sa robe rose – et s'effondre – je pleure à chaque fois.</li>
                        </>
                        )}

                        {serie.id === 7 && (
                        <>
                            <li>Addison seule, dans sa voiture, après avoir appris qu'elle ne pouvait pas avoir d'enfant – silence assourdissant.</li>
                            <li>Cooper confessant à Charlotte qu'il ne veut pas d'autre femme – l'une des plus belles déclarations de la série.</li>
                        </>
                        )}

                        {serie.id === 8 && (
                        <>
                            <li>Jack Pearson qui parle à son fils adolescent dans un flashback – une leçon d'amour paternel.</li>
                            <li>Randall face à sa mère biologique – quand il comprend ce que c'est que grandir entre deux mondes.</li>
                            <li>Le montage final de l'épisode "The Train", avec la voix off – une claque émotionnelle.</li>
                        </>
                        )}
                    </ul>
                </section>

                {/* Chansons entendues */}
                {chansons.length > 0 && (
                    <section className="mb-12">
                        <h2>Chansons entendues</h2>
                        <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                            {chansons.map(({ titre, artiste }, idx) => (
                                <li key={idx}>
                                    "{titre}" — {artiste}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Artistes coup de cœur */}
                <section className="mb-12">
                    <h2>Artistes coup de cœur</h2>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">

                        {serie.id === 1 && (
                        <>
                            <li><strong>Paula Cole</strong> — parce qu'elle incarne l'adolescence à elle seule, avec une voix qui serre le cœur dès les premières notes.</li>
                            <li><strong>Sophie B. Hawkins</strong> — pour sa douceur mélancolique, parfaite pour les nuits d'ado où tout déborde.</li>
                        </>
                        )}

                        {serie.id === 2 && (
                        <>
                            <li><strong>Gavin DeGraw</strong> — mon amour de toujours. Je connais tous ses albums. Il m'a accompagnée dans mes chagrins, mes débuts, mes rêves.</li>
                            <li><strong>Joshua Radin</strong> — la voix des soirs calmes, des silences qui font du bien. Un artiste qui m'apaise à chaque écoute.</li>
                            <li><strong>Bethany Joy Lenz</strong> — bien plus qu'une actrice : une artiste sensible, sincère, que je respecte profondément.</li>
                            <li><strong>The Wreckers</strong> — pour cette country douce-amère qui sent l'Amérique et les routes qu'on prend seule.</li>
                        </>
                        )}

                        {serie.id === 3 && (
                        <>
                            <li><strong>Carole King</strong> — une légende, bien sûr, mais aussi une mère musicale. Sa voix me ramène toujours à quelque chose de sûr, de chaud.</li>
                            <li><strong>Sam Phillips</strong> — pour ses murmures doux, toujours en fond, jamais envahissants, mais qui restent longtemps après.</li>
                        </>
                        )}

                        {serie.id === 4 && (
                        <>
                            <li><strong>Anna Nalick</strong> — sa chanson m'a marquée à vie. Elle revient dans plusieurs séries, mais ici elle m'a cueillie.</li>
                            <li><strong>Joss Stone</strong> — pour sa puissance vocale qui détonne au milieu des secrets bien rangés de Wisteria Lane.</li>
                        </>
                        )}

                        {serie.id === 5 && (
                        <>
                            <li><strong>Florence + The Machine</strong> — quand sa voix surgit dans une scène, le monde s'arrête. Elle incarne tout ce que Gossip Girl cache sous les paillettes.</li>
                            <li><strong>Peter Bjorn and John</strong> — ce sifflement est devenu mythique. Une mélodie qui reste coincée dans la tête… et dans la série.</li>
                        </>
                        )}

                        {serie.id === 6 && (
                        <>
                            <li><strong>Snow Patrol</strong> — *Chasing Cars* est devenu un classique, mais pour moi, c'est surtout une déchirure douce.</li>
                            <li><strong>The Fray</strong> — *How to Save a Life*… faut-il vraiment expliquer pourquoi ce titre m'a marquée ?</li>
                            <li><strong>Ingrid Michaelson</strong> — sa voix fragile, ses paroles brutes. Elle colle parfaitement à Grey's Anatomy, et à ce que je ressens en la regardant.</li>
                            <li><strong>Brandi Carlile</strong> — une artiste entière, qui chante le vrai, sans filtre. Elle fait partie de celles que j'écoute en boucle quand je doute.</li>
                        </>
                        )}

                        {serie.id === 7 && (
                        <>
                            <li><strong>Anna Nalick</strong> — encore elle, mais parce que *Breathe (2 AM)* est l'âme même de Private Practice.</li>
                            <li><strong>Ingrid Michaelson</strong> — elle revient, parce qu'elle colle aussi à cette série plus intime, plus introspective.</li>
                            <li><strong>Brandi Carlile</strong> — comme dans Grey's Anatomy, elle sait chanter la vulnérabilité sans pathos.</li>
                        </>
                        )}

                        {serie.id === 8 && (
                        <>
                            <li><strong>Sufjan Stevens</strong> — ses morceaux me brisent et me réparent. *Death with Dignity* est une gifle émotionnelle.</li>
                            <li><strong>Gabrielle Aplin</strong> — tout en douceur, mais jamais fade. Sa voix m'emmène loin, là où ça fait mal et ça apaise en même temps.</li>
                            <li><strong>Ruelle</strong> — parfaite pour l'ambiance de This Is Us. Sombre, éthérée, pleine d'émotion retenue.</li>
                            <li><strong>Keane</strong> — *Somewhere Only We Know*, c'est la chanson des souvenirs qu'on n'arrive jamais à oublier.</li>
                        </>
                        )}

                    </ul>
                </section>

                {/* Playlist émotion */}
                <section className="mb-12">
                    <h2>Playlist émotion</h2>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                        {serie.id === 1 && (
                            <>
                                <li>"I Don't Want to Wait" — Paula Cole (parce que chaque note, c'est un souvenir d'ado qui revient)</li>
                                <li>"As I Lay Me Down" — Sophie B. Hawkins (pour ces soirs de pluie intérieure où tout vacille doucement)</li>
                                <li>"Pushing Up Daisies" — Jann Arden (la chanson qu'on écoute quand on n'a pas les mots mais trop de cœur)</li>
                            </>
                        )}

                        {serie.id === 2 && (
                            <>
                                <li>"I Don't Want to Be" — Gavin DeGraw (l'hymne d'une génération qui cherche sa place et ose rêver)</li>
                                <li>"Winter" — Joshua Radin (une caresse dans le chaos — à écouter quand le monde devient trop bruyant)</li>
                                <li>"Halo" — Bethany Joy Lenz (parce que sa voix, c'est la voix de Brooke, fragile et immense à la fois)</li>
                            </>
                        )}

                        {serie.id === 3 && (
                            <>
                                <li>"Where You Lead" — Carole King & Louise Goffin (parce qu'on rêve toutes de marcher dans Stars Hollow avec ça en fond)</li>
                                <li>"Reflecting Light" — Sam Phillips (la chanson des regards qui en disent trop, mais pas assez vite)</li>
                            </>
                        )}

                        {serie.id === 4 && (
                            <>
                                <li>"Goodbye to You" — Michelle Branch (pour toutes les séparations qu'on n'a pas choisies)</li>
                                <li>"Band of Gold" — Freda Payne (parce que Desperate Housewives, c'est aussi ça : la nostalgie masquée par les sourires)</li>
                            </>
                        )}

                        {serie.id === 5 && (
                            <>
                                <li>"With Me" — Sum 41 (parce qu'on a tous eu un cœur trop plein, trop jeune, trop seul)</li>
                                <li>"You've Got the Love" — Florence + The Machine (l'espoir en version brutale et sublime)</li>
                            </>
                        )}

                        {serie.id === 6 && (
                            <>
                                <li>"How to Save a Life" — The Fray (on ne s'en remet jamais vraiment)</li>
                                <li>"The Story" — Brandi Carlile (parce que cette chanson, c'est Grey's en une ligne : « All of these lines across my face… »)</li>
                            </>
                        )}

                        {serie.id === 7 && (
                            <>
                                <li>"Breathe (2 AM)" — Anna Nalick (c'est elle qui donne le ton, dès le départ — fragile, vraie, urgente)</li>
                                <li>"Breakable" — Ingrid Michaelson (la tendresse qu'on n'ose pas toujours montrer, mais qu'on ressent tout le temps)</li>
                            </>
                        )}

                        {serie.id === 8 && (
                            <>
                                <li>"Death with Dignity" — Sufjan Stevens (une chanson qui te laisse en larmes sans que tu comprennes pourquoi)</li>
                                <li>"Salvation" — Gabrielle Aplin (celle qu'on écoute quand on veut croire que tout ira bien, même si ça fait mal)</li>
                            </>
                        )}
                    </ul>
                </section>

                {/* Lieux de tournage */}
                {lieu && (
                    <section className="mb-12">
                        <h2>Lieux de tournage</h2>
                        <p className="text-[var(--color-dark)]">
                            <Link
                                href={`/locations#lieu-${lieu.id}`}
                                className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline underline-offset-2 transition-colors"
                            >
                                <strong>{lieu.nom}</strong>
                            </Link> — {lieu.description}
                        </p>
                    </section>
                )}

                {/* Bande originale */}
                {artistes.length > 0 && (
                    <section className="mb-12">
                        <h2>Bande originale</h2>
                        <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                            {artistes.map((artiste) => (
                            <li key={artiste.id}>
                                <Link
                                href={`/music/${artiste.id}`}
                                className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline underline-offset-2 transition-colors"
                                >
                                {artiste.nom}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Séparateur de fin */}
                <div className="article-separator">
                    • • •
                </div>
            </div>
        </main>
    );
}
