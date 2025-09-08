import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Do you have a free trial?",
    ans: "Yes we have a free 14 day trial! We want you to test our product for yourself and see all the features we have.",
  },
  {
    id: 2,
    quest: "How do I access the software?",
    ans: "You can access our software from browser and you can also download our ios app from the app store.",
  },
  {
    id: 3,
    quest: "How many users can I have on my plan?",
    ans: "With both of our plans you can have unlimited users on your account.",
  },
  {
    id: 4,
    quest: "How do I cancel?",
    ans: `If you don't like our product, you can cancel anytime. 
    Just log in to your account and from your account settings you can select "cancel account". 
    You'll have to pay the remainder of the month if you are on the monthly payment plan.`,
  },
];

export default faqData;
