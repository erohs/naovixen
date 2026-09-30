import { downloadIcon, ExternalLink, externalLinkIcon, gitHubIcon } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { LinkTile } from '../LinkTile.component';

describe('Using LinkTile', () => {
    describe('given a page on this site', () => {
        describe('when it renders', () => {
            test('then it should be one link named by its label and detail', () => {
                render(
                    <LinkTile href="/cv" label="Example" detail="Read online" icon={gitHubIcon} />,
                );

                expect(screen.getByRole('link', { name: 'Example Read online' })).toHaveProperty(
                    'pathname',
                    '/cv',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <LinkTile href="/cv" label="Example" detail="Read online" icon={gitHubIcon} />,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given another site rendered through ExternalLink', () => {
        describe('when it renders', () => {
            test('then it should be named with the new tab hint', () => {
                render(
                    <LinkTile
                        href="https://example.com"
                        label="Example"
                        detail="example.com"
                        icon={gitHubIcon}
                        trailingIcon={externalLinkIcon}
                        linkComponent={ExternalLink}
                    />,
                );

                expect(
                    screen.getByRole('link', { name: 'Example example.com (opens in new tab)' }),
                ).toHaveProperty('target', '_blank');
            });
        });
    });

    describe('given a file to download', () => {
        describe('when it renders', () => {
            test('then it should offer the file as a download', () => {
                render(
                    <LinkTile
                        href="/example.pdf"
                        download
                        label="Example file"
                        detail="PDF"
                        icon={downloadIcon}
                        trailingIcon={downloadIcon}
                    />,
                );

                expect(screen.getByRole('link').hasAttribute('download')).toBe(true);
            });
        });
    });
});
