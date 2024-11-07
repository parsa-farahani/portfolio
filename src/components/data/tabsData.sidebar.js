// icons
import { AssignmentRounded, ConnectWithoutContactRounded, HomeRounded, InsertCommentRounded, OndemandVideoRounded, SentimentSatisfiedRounded, TerminalRounded } from "@mui/icons-material";


// tab props
export const navTabProps = (index) => {
   return {
      id: `navtab-${index}`,
      'aria-controls': `tabpanel-${index}`,
   }
}


// tabs data
export const getTabsData = () => {

   const tabs = [
      {
         label: "صفحه اصلی",
         icon: <HomeRounded/>,
         ...navTabProps(0),
      },
      {
         label: "درباره من",
         icon: <SentimentSatisfiedRounded/>,
         ...navTabProps(1),
      },
      {
         label: "رزومه من",
         icon: <AssignmentRounded/>,
         ...navTabProps(2),
      },
      {
         label: "دوره های من",
         icon: <OndemandVideoRounded/>,
         ...navTabProps(3),
      },
      {
         label: "نظرات افراد",
         icon: <InsertCommentRounded/>,
         ...navTabProps(4),
      },
      {
         label: "نمونه کارها",
         icon: <TerminalRounded/>,
         ...navTabProps(5),
      },
      {
         label: "تماس با من",
         icon: <ConnectWithoutContactRounded/>,
         ...navTabProps(6),
      },
   ]

   return tabs;
}