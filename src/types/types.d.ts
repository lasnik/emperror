type Author = {
  name: string;
  url?: string;
  affiliation_ids: string[];
  notes?: string[];
}

type Affiliation = {
  id: string;
  name: string;
}

type Link = {
  url: string;
  name: string;
  icon?: string;
}

type Note = {
  symbol: string;
  text: string;
}

export { Author, Affiliation, Link, Note };