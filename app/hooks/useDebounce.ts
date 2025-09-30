import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook pour debouncer les actions rapides (éviter les tap rapides multiples)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isProcessing = useRef(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      // Ignorer si déjà en cours de traitement
      if (isProcessing.current) {
        return;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        isProcessing.current = true;
        callback(...args);
        setTimeout(() => {
          isProcessing.current = false;
        }, delay);
      }, delay);
    },
    [callback, delay]
  );
}
