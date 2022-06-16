
interface FeedbackCreateDate{
  name:  string,
  email: string,
  type       string
  comment    String
  screenshot String?
  datatual   String?
}


export interface FeedbackRepository{
    create:() =>  void;
}