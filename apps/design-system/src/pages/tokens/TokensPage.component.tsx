import type { CSSProperties, FunctionComponent } from 'react';
import { darkTheme, lightTheme, sharedTokens } from '@naovixen/theming';

import { ContrastTable } from '../../components/contrast-table/ContrastTable.component';
import { Example } from '../../components/example/Example.component';

const colorTokens = Object.keys(lightTheme) as (keyof typeof lightTheme)[];

function tokensStartingWith(prefix: string): string[] {
    return Object.keys(sharedTokens).filter((name) => name.startsWith(prefix));
}

/** A token's own value, applied to one property, for a specimen that shows what it does. */
function specimenStyle(property: string, token: string): CSSProperties {
    return { [property]: `var(${token})` };
}

const Colours: FunctionComponent = () => (
    <Example name="Colours">
        {colorTokens.map((token) => (
            <figure key={token} className="nv-tokens-page__swatch">
                <span
                    className="nv-tokens-page__colour"
                    style={specimenStyle('backgroundColor', token)}
                />
                <figcaption>
                    {token}
                    <br />
                    light {lightTheme[token]}, dark {darkTheme[token]}
                </figcaption>
            </figure>
        ))}
    </Example>
);

const TypeScale: FunctionComponent = () => (
    <Example name="Type scale">
        <div className="nv-tokens-page__column">
            {tokensStartingWith('--font-size-').map((token) => (
                <p key={token} style={specimenStyle('fontSize', token)}>
                    {token}
                </p>
            ))}
        </div>
    </Example>
);

const FontFamilies: FunctionComponent = () => (
    <Example name="Font families">
        <div className="nv-tokens-page__column">
            {tokensStartingWith('--font-family-').map((token) => (
                <p key={token} style={specimenStyle('fontFamily', token)}>
                    {token}: the quick brown fox jumps over the lazy dog
                </p>
            ))}
        </div>
    </Example>
);

const Spacing: FunctionComponent = () => (
    <Example name="Spacing">
        <div className="nv-tokens-page__column">
            {tokensStartingWith('--space-between-').map((token) => (
                <div key={token} className="nv-tokens-page__space">
                    <span
                        className="nv-tokens-page__bar"
                        style={specimenStyle('inlineSize', token)}
                    />
                    {token}
                </div>
            ))}
        </div>
    </Example>
);

const Radii: FunctionComponent = () => (
    <Example name="Radii and shadows">
        {[...tokensStartingWith('--radius-'), ...tokensStartingWith('--shadow-')].map((token) => (
            <div
                key={token}
                className="nv-tokens-page__box"
                style={specimenStyle(
                    token.startsWith('--radius-') ? 'borderRadius' : 'boxShadow',
                    token,
                )}
            >
                {token}
            </div>
        ))}
    </Example>
);

export const TokensPage: FunctionComponent = () => (
    <>
        <Colours />
        <ContrastTable />
        <TypeScale />
        <FontFamilies />
        <Spacing />
        <Radii />
    </>
);
