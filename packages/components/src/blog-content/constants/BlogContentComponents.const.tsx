import type {
  PortableTextComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from '@portabletext/react';

import { Callout } from '../../callout/Callout.component';
import { CodeBlock } from '../../code-block/CodeBlock.component';
import { Figure } from '../../figure/Figure.component';
import { Heading } from '../../heading/Heading.component';
import { Link } from '../../link/Link.component';
import { resolveLinkDestination } from '../functions/ResolveLinkDestination.function';
import type { ICalloutBlockValue } from '../interfaces/ICalloutBlockValue';
import type { ICodeBlockValue } from '../interfaces/ICodeBlockValue';
import type { IFigureBlockValue } from '../interfaces/IFigureBlockValue';
import type { ILinkMarkValue } from '../interfaces/ILinkMarkValue';

/**
 * Paragraphs, blockquotes, lists and the strong, em and code marks keep the library's plain
 * HTML. Unknown types and marks are dropped quietly (a mark keeps its text), because the
 * defaults write developer warnings into the page.
 */
export const blogContentComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
  },
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<ILinkMarkValue>) =>
      value ? (
        <Link href={value.href} destination={resolveLinkDestination(value.href)}>
          {children}
        </Link>
      ) : (
        children
      ),
  },
  types: {
    callout: ({ value }: PortableTextTypeComponentProps<ICalloutBlockValue>) => (
      <Callout kind={value.kind} title={value.title}>
        <p>{value.text}</p>
      </Callout>
    ),
    code: ({ value }: PortableTextTypeComponentProps<ICodeBlockValue>) => (
      <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    ),
    figure: ({ value }: PortableTextTypeComponentProps<IFigureBlockValue>) => (
      <Figure image={value.image} caption={value.caption} shape={value.shape} />
    ),
  },
  unknownType: () => null,
  unknownMark: ({ children }) => children,
};
