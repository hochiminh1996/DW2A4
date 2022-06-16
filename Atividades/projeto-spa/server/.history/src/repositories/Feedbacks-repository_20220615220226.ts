
interface FeedbackCreateDate{
    name       String
  email      String
  type       String
  comment    String
  screenshot String?
  datatual   String?
}


export interface FeedbackRepository{
    create:() =>  void;
}