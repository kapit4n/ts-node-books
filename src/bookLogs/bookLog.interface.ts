export interface BaseBookLog {
  bookId: number;
  date: Date;
  readPages: number;
  feedback: string;
}

export interface BookLog extends BaseBookLog {
  id: number;
}
