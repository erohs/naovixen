import type { IFormFieldControlProps } from '../interfaces/IFormFieldControlProps';

/** Describes the control by whichever of the hint and the error are present. */
export function buildControlProps(
    id: string,
    hasHint: boolean,
    hasError: boolean,
): IFormFieldControlProps {
    const describingIds = [hasHint && `${id}-hint`, hasError && `${id}-error`].filter(Boolean);

    return {
        id,
        'aria-describedby': describingIds.length > 0 ? describingIds.join(' ') : undefined,
        'aria-invalid': hasError ? true : undefined,
    };
}
