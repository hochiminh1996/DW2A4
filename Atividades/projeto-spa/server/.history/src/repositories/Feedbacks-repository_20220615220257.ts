
interface FeedbackCreateDate{
  name:  string,
  email: string,
  type       string
  comment    string
  screenshot String?
  datatual   String?
}


export interface FeedbackRepository{
    create:() =>  void;
}