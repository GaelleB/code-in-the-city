import { notFound } from "next/navigation";
import { series } from "@/data/series";
import { musiques, Artiste } from "@/data/musiques";
import { lieux } from "@/data/lieux";
import Image from "next/image";
import Link from "next/link";

export default function SerieDetail({ params }: { params: { id: string } }) {
    const serie = series.find((s) => s.id === Number(params.id));
    if (!serie) return notFound();

    const lieu = lieux.find((l) => l.id === serie.lieux);
    const musiquesIds: number[] = serie.musique;
    const artistes = musiques.filter((a: Artiste) =>
        musiquesIds.includes(a.id)
    );

    return (
        <main className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2 border-b-2 border-[var(--color-secondary)] pb-2">
                {serie.title}
            </h1>

            {serie.originalTitle && (
                <p className="italic text-gray-600 mb-1">({serie.originalTitle})</p>
            )}

            <p className="italic text-gray-600 mb-4">{serie.years}</p>

            <p className="text-[var(--color-dark)] leading-relaxed mb-8 text-justify">
                {serie.synopsis}
            </p>

            {/* Ce que m'a apporté cette série */}
            <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-2">Ce que m'a apporté cette série</h2>
                <div className="text-[var(--color-dark)] leading-relaxed mb-8 space-y-4">
                    {serie.id === 1 && (
                        <p>
                        Dawson’s Creek, c’est sans doute la première série qui m’a donné envie de penser.<br />
                        Pas juste de ressentir, mais de mettre des mots sur ce que je ressentais.<br />
                        Dawson, Joey, Pacey… c’était mes compagnons de bord de mer, dans un monde où on parlait trop, mais si bien.<br />
                        C’est là que j’ai appris qu’on pouvait aimer sans se l’avouer, se déchirer sans se haïr.<br />
                        Le Capeside de Dawson, c’était un refuge pour mon esprit en surchauffe d’ado.<br />
                        Et cette scène du baiser sur le ponton, elle est restée imprimée dans ma mémoire comme un premier amour qu’on n’oublie jamais.<br />
                        Même aujourd’hui, je reviens parfois les voir. Parce que j’ai grandi. Mais eux, non. Et c’est ce qui me rassure.
                        </p>
                    )}
                    {serie.id === 2 && (
                        <p>
                        Les Frères Scott, c’est pas juste une série que j’ai aimée.<br />
                        C’est une série qui m’a construite.<br /><br />
                        Elle m’a donné une famille que je n’avais pas choisie, mais que j’attendais sans le savoir.<br />
                        Elle m’a appris qu’on pouvait changer, tomber, revenir.<br />
                        Que même les pires pères pouvaient pleurer.<br />
                        C’est la première fois que j’ai ressenti qu’un dialogue pouvait me parler comme une chanson.<br />
                        Et justement… cette série m’a ouvert à un monde musical entier. Gavin DeGraw, Joshua Radin, Bethany Joy Lenz, tous ces artistes que je ne connaissais pas, mais qui semblaient avoir mis des mots sur ce que je n’arrivais pas à dire.<br /><br />
                        À l’époque, je gravais les chansons sur des CD pour les écouter en boucle dans ma chambre.<br />
                        Aujourd’hui, je les écoute encore. Et elles me ramènent à moi, à cette ado qui cherchait sa place, qui voulait qu’on la voie, qu’on l’aime, sans trop savoir comment faire.<br /><br />
                        Je reviens souvent à Tree Hill.<br />
                        Pas pour les rebondissements.<br />
                        Mais pour ce mélange de lumière triste, d’amour maladroit et de phrases qui font mal pour de vrai.<br />
                        C’est une série qui parle aux cœurs cabossés. Et moi, le mien a longtemps parlé cette langue-là.
                        </p>
                    )}
                    {serie.id === 3 && (
                        <p>
                        Gilmore Girls, c’est l’une des rares séries qui me fait du bien, sans drame ni tempête.<br />
                        C’est doux, c’est drôle, c’est rapide, c’est brillant.<br />
                        J’ai toujours adoré cette relation mère-fille qui frôle l’amitié, avec ses éclats et ses excès.<br />
                        Mais surtout, cette série m’a donné une sensation de cocon.<br />
                        Stars Hollow, c’est le genre de ville dans laquelle j’aurais aimé vivre.<br />
                        Et Lorelai, avec ses répliques à 200 à l’heure et ses doutes soigneusement cachés, c’était un peu moi – ou celle que je rêvais d’être.<br />
                        Elle m’a appris qu’on pouvait rater, recommencer, se planter, rire quand même, et que le café résolvait tout.
                        </p>
                    )}
                    {serie.id === 4 && (
                        <p>
                        Quand je l’ai regardée pour la première fois, je pensais voir une série légère, presque caricaturale.<br />
                        Mais Desperate Housewives, c’est un chef-d'œuvre d’apparences.<br />
                        Sous les pelouses parfaites et les sourires figés, il y a tout ce que je redoutais chez les adultes : les secrets, les silences, la solitude dans le confort.<br />
                        Cette série m’a montré que chaque femme cache une tempête, même derrière un tablier ou un brushing impeccable.<br />
                        Et moi, je me suis reconnue dans leurs fragilités.<br />
                        Pas parce que j’ai vécu la même chose, mais parce que j’ai ressenti les mêmes manques.<br />
                        Elle m’a appris que les femmes fortes sont souvent celles qui tombent le plus discrètement.
                        </p>
                    )}
                    {serie.id === 5 && (
                        <p>
                        J’ai longtemps dit que je ne regardais pas cette série “pour de vrai”.<br />
                        Trop bling-bling, trop superficielle.<br />
                        Mais la vérité, c’est que j’étais fascinée.<br />
                        Fascinée par ce monde de privilèges où tout le monde est paumé.<br />
                        J’ai aimé la cruauté de Blair, le vide de Serena, les colères de Chuck.<br />
                        Mais surtout, cette série m’a montré l’envers du décor.<br />
                        Qu’on peut être belle, riche, admirée, et quand même se sentir seule.<br />
                        C’est une série qui te rappelle que les apparences sont des prisons dorées.<br />
                        Et que parfois, on rêve juste de tout brûler pour ressentir quelque chose de vrai.
                        </p>
                    )}
                    {serie.id === 6 && (
                        <p>
                        Grey’s Anatomy, c’est une série que je n’ai jamais regardée “avec légèreté”.<br />
                        Chaque épisode est une claque émotionnelle.<br />
                        C’est la série qui m’a appris la perte, la résilience, le chaos du deuil et la beauté des secondes chances.<br />
                        Elle m’a fait pleurer, souvent. Mais elle m’a aussi portée.<br />
                        Parce que dans les couloirs de cet hôpital, il y avait des phrases que j’aurais voulu qu’on me dise.<br />
                        Meredith, malgré son brouillard permanent, m’a toujours semblé terriblement humaine.<br />
                        Grey’s Anatomy m’a fait comprendre qu’on pouvait continuer à marcher même avec le cœur en miettes.<br />
                        Et que parfois, la chirurgie la plus urgente… c’est celle qu’on fait sur soi.
                        </p>
                    )}
                    {serie.id === 7 && (
                        <p>
                        Plus intime, plus calme, plus adulte aussi.<br />
                        Private Practice, c’est la série qui m’a appris à regarder mes failles avec tendresse.<br />
                        Addison, si brillante et pourtant si fragile, m’a touchée profondément.<br />
                        J’ai aimé ce cabinet, ce groupe imparfait, ces décisions impossibles.<br />
                        C’est une série qui parle de choix douloureux, de corps blessés, de désirs complexes.<br />
                        Et dans ces histoires, j’ai reconnu mes tiraillements.<br />
                        Elle m’a offert un espace où les émotions n’étaient pas jugées, juste racontées.<br />
                        Et ça, ça fait du bien.
                        </p>
                    )}
                    {serie.id === 8 && (
                        <p>
                        Je ne savais pas qu’une série pouvait aller aussi loin dans le cœur.<br />
                        This Is Us, c’est un uppercut doux.<br />
                        C’est une famille qui n’est pas la mienne, mais que j’ai adoptée sans hésiter.<br />
                        Elle m’a fait pleurer dès le pilote.<br />
                        Et depuis, elle ne m’a jamais laissée indifférente.<br />
                        Cette série, c’est la mémoire, les regrets, les silences, les transmissions.<br />
                        Elle m’a appris que le passé ne meurt jamais, qu’il revient en fragments, en musiques, en odeurs.<br />
                        C’est une série qui m’a réconciliée avec mes émotions.<br />
                        Parce que pour une fois, j’avais le droit de pleurer.<br />
                        Et j’ai pleuré. Vraiment.
                        </p>
                    )}
                </div>
            </section>

            {lieu && (
                <section className="mb-10">
                    <h2 className="text-2xl font-serif font-semibold mb-2">Lieu de tournage</h2>
                    <p className="text-[var(--color-dark)] mb-2">
                        <strong>{lieu.nom}</strong> — {lieu.description}
                    </p>
                </section>
            )}

            {artistes.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-2xl font-serif font-semibold mb-2">Bande originale</h2>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                        {artistes.map((artiste) => (
                        <li key={artiste.id}>
                            <Link
                            href={`/music/${artiste.id}`}
                            className="text-[var(--color-primary)] hover:underline hover:text-black transition-colors"
                            >
                            {artiste.nom}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </section>
            )}

            {serie.casting && (
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-semibold mb-6 border-b border-[var(--color-secondary)] pb-1">
                        Distribution principale
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[var(--color-dark)]">
                        {serie.casting.map((actor, index) => (
                        <li key={index} className="transition-all duration-200 hover:text-black">
                            <strong>{actor.actor}</strong> — {actor.character} ({actor.ageAtStart} ans)
                        </li>
                        ))}
                    </ul>
                </section>
            )}

            {serie.anecdotes?.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-semibold mb-4 border-b border-[var(--color-secondary)] pb-1">
                        Anecdotes
                    </h2>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                        {serie.anecdotes.map((a, i) => (
                        <li key={i}>{a}</li>
                        ))}
                    </ul>
                </section>
            )}

            {serie.image && (
                <div className="mt-12">
                    <Image
                        src={serie.image}
                        alt={serie.title}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-md mx-auto"
                    />
                </div>
            )}
        </main>
    );
}