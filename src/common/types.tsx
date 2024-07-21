type tplotOptionsNumber = {
  [key: string]: number;
};

type tplotOptionsString = {
  [key: string]: string;
};

type tplotOptionsAll = {
  [key: string]: any;
};

export interface ApiRequestProps {
  method: any;
  url: any;
  data?: tplotOptionsAll;
  isResponse?: boolean;
  additionalHeaders?: tplotOptionsAll;
}
