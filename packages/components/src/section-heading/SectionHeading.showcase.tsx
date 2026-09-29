import type { IShowcase } from '../interfaces/IShowcase';
import { SectionHeading } from './SectionHeading.component';

export const sectionHeadingShowcase: IShowcase = {
  name: 'SectionHeading',
  examples: [
    { name: 'Title only', render: () => <SectionHeading title="Example section" /> },
    {
      name: 'With a number',
      render: () => <SectionHeading number="01" title="Example section" />,
    },
    {
      name: 'With an intro',
      render: () => (
        <SectionHeading title="Example section" intro="A sentence introducing the section." />
      ),
    },
    {
      name: 'Level 3, number and intro',
      render: () => (
        <SectionHeading
          level={3}
          number="02"
          title="Example subsection"
          intro="A sentence introducing the subsection."
        />
      ),
    },
  ],
};
