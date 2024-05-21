export interface PostProps {
  objects: ObjectProps[];
  total: number;
}

interface ObjectProps {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
      imgix_url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
        imgix_url: string;
      };
      button_active: boolean;
      button_title: string;
      button_url: string;
    };
  };
}
