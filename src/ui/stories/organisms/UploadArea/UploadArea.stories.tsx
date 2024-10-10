import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  UploadArea,
  UploadAreaListProps,
  UploadAreaProps,
  UploadInputItem,
} from '@organisms';
import { Flex } from '@atoms';

export default {
  title: 'Components/Organisms/UploadArea',
  component: UploadArea,
} as Meta;

const Template: StoryFn<UploadAreaProps> = (args: UploadAreaProps) => {
  const [value, setValue] = useState<Array<File> | File>();
  return (
    <Flex hFull wFull mb7 mt7 ml7 mr7>
      <UploadArea {...args} value={value} onChange={(f) => setValue(f)} />
    </Flex>
  );
};

export const UploadAreaSingle = Template.bind({});
UploadAreaSingle.args = {
  title:
    'Arraste o PDF do boleto para esta área ou clique aqui para fazer o upload.',
};

export const UploadAreaMultiple = Template.bind({});
UploadAreaMultiple.args = {
  title:
    'Arraste o PDF do boleto para esta área ou clique aqui para fazer o upload.',
  multiple: true,
};

const TemplateInput: StoryFn<UploadAreaListProps> = (args: UploadAreaListProps) => {
  const [value, setValue] = useState<
    Array<UploadInputItem> | UploadInputItem
  >();
  return (
    <Flex hFull wFull mb7 mt7 ml7 mr7>
      <UploadArea.Input
        {...args}
        value={value}
        onRemove={(f) => setValue(f || [])}
        onChange={(f) => setValue(f || [])}
      />
    </Flex>
  );
};

export const UploadAreaListSimple = TemplateInput.bind({});
UploadAreaListSimple.args = {
  title: 'Anexar documento',
  value: undefined,
  placeholder: 'Nota explicativa',
};

export const UploadAreaListMultiple = TemplateInput.bind({});
UploadAreaListMultiple.args = {
  title: 'Anexar documento',
  multiple: true,
  value: [],
  placeholder: 'Nota explicativa',
  accept: ['image/png'],
};

export const UploadAreaListMerge = TemplateInput.bind({});
UploadAreaListMerge.args = {
  title: 'Anexar documento',
  multiple: false,
  value: undefined,
  placeholder: 'Nota explicativa',
  accept: ['image/png'],
  matchList: true,
  center: true,
  ignoreDescription: true,
  icon: 'pdfDouble',
};
