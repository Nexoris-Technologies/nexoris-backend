import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_faq_items';
  info: {
    displayName: 'shared.faq-item';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface SharedSharedSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_seo_metas';
  info: {
    displayName: 'shared.seo-meta';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    noFollow: Schema.Attribute.Boolean;
    noIndex: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.shared-faq-item': SharedSharedFaqItem;
      'shared.shared-seo-meta': SharedSharedSeoMeta;
    }
  }
}
