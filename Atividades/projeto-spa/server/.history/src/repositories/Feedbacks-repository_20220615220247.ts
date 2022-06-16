
interface FeedbackCreateDate{
  name:  String,
  email: string
  type       String
  comment    String
  screenshot String?
  datatual   String?
}


export interface FeedbackRepository{
    create:() =>  void;
}