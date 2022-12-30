import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { theme } from "../global/layout";

const questions = [
  {
    id: 1,
    ques: "What are the Advances of Unimax Global?",
    ans: "Unimax Global takes into consideration every little detail to make sure the system runs smoothly and responsively.",
  },
  {
    id: 2,
    ques: "How Working Progress is Simplified?",
    ans: "We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure Unimax Global would run seamlessly and the design is reserved in i",
  },
  {
    id: 3,
    ques: "How can we help your business?",
    ans: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer the appropriate advice, and bring about suggestions on suitable technology to transform your business.",
  },
  {
    id: 4,
    ques: "What platform/technology do you build your websites on?",
    ans: "Our websites are crafted skillfully with the help of different technologies like PHP and WordPress etc. As we are competing with a wide range of technologies, we always try to serve our client with the latest one that suits the client’s requirements.",
  },
  {
    id: 5,
    ques: "How long will it take to get a new website?",
    ans: "It takes around 4-5 weeks on average but, the speed of a project is set by each client and the requirements. It clearly depends on the development of the site, the content, etc. The functionality of the job also plays a vital role, the more complex the site is, the more time it will take",
  },
  {
    id: 6,
    ques: "How much does a new website cost?",
    ans: "The price of a website is set based on the needs of each project, Every website is unique in its own ways and each of them requires different components. We design and develop custom websites especially for you. All aspects ranging from requirements to complexity affect the price. Our developed sites run in the $400 to $3,000 range but, it is adjusted based on your budget and needs.",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.border.main}`,

  "&:first-child": {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  "&:last-child": {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `2px solid ${theme.palette.border.main}`,
}));

export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
        borderRadius: 10,
      }}
    >
      {questions.map((item, index) => {
        const isLast = questions.length - 1 === index;
        return (
          <Accordion
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              sx={{
                transition: "0.3s all",
                borderTopLeftRadius: index === 0 ? 10 : 0,
                borderTopRightRadius: index === 0 ? 10 : 0,
                borderBottomRightRadius:
                  isLast && expanded !== item.id ? 10 : 0,
                borderBottomLeftRadius: isLast && expanded !== item.id ? 10 : 0,

                backgroundColor:
                  expanded === item.id ? "secondary.main" : "white",
                color: expanded === item.id ? "white" : "primary.main",

                "& .MuiSvgIcon-root": {
                  color: expanded === item.id ? "white" : "primary.main",
                },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{item.ques}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...theme.typography.body2 }}>
                {item.ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
