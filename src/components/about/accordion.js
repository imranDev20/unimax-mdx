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
    ques: "What does Unimax specialize in?",
    ans: "Unimax specializes in providing innovative IT solutions, including web development, mobile app development, digital marketing, SEO, content writing, and graphics design services.",
  },
  {
    id: 2,
    ques: "How much experience does Unimax have?",
    ans: "Unimax has 3+ years of experience in the IT industry. Our team of developers brings a wealth of expertise from working in respected software companies both domestically and internationally. They have also honed their skills through experience in various online marketplaces, ensuring a deep understanding of industry best practices and trends. This collective experience allows us to provide top-tier IT solutions to our clients.",
  },
  {
    id: 3,
    ques: "What is Unimax's payment process?",
    ans: "Unimax follows a structured payment process to ensure transparency and client satisfaction. It includes a 10% pre-payment, a 30% payment upon reaching 50% project completion, and the remaining 60% upon full project completion.",
  },
  {
    id: 4,
    ques: "How can I be sure my payment is secure with Unimax?",
    ans: "Unimax prioritizes the security of your investment. Our payment process is designed to provide peace of mind. By making partial payments based on project milestones, you can be confident that your money is protected. We believe in delivering results before receiving full payment, ensuring your satisfaction and the quality of our services.",
  },
  {
    id: 5,
    ques: "What payment methods does Unimax accept?",
    ans: "We offer flexible payment options to accommodate our clients. Currently, we accept bank payments as well as international credit card payments, making it convenient for you to engage our services. Our payment structure typically involves a 10% pre-payment, a 30% payment upon reaching the halfway point of the project, and the remaining 60% upon successful project completion. This payment schedule is designed to ensure transparency and that your investment is secure throughout the project's lifecycle.",
  },
  {
    id: 6,
    ques: "Does Unimax work on fixed-price projects or hourly rates?",
    ans: "Unimax provides flexibility in project engagement. We offer both fixed-price and hourly rate models to cater to your specific project needs. Our fixed-price model is ideal for well-defined projects with clear requirements, while the hourly rate model allows for greater flexibility when project scope may evolve over time. Our aim is to tailor our services to best align with your project's unique demands and your budgetary preferences.",
  },
  {
    id: 7,
    ques: "Does Unimax work on fixed-price projects or hourly rates?",
    ans: "Unimax provides flexibility in project engagement. We offer both fixed-price and hourly rate models to cater to your specific project needs. Our fixed-price model is ideal for well-defined projects with clear requirements, while the hourly rate model allows for greater flexibility when project scope may evolve over time. Our aim is to tailor our services to best align with your project's unique demands and your budgetary preferences.",
  },
  {
    id: 8,
    ques: "How long does it take to complete a project with Unimax?",
    ans: "The project timeline can vary significantly depending on its complexity, scope, and specific requirements. For medium to large-sized MERN projects, such as highly performant e-commerce platforms, admin panels, or HRMS software, the development phase may typically span 2-3 months. In the case of WordPress websites, completion can range from 1-3 weeks, while Cross-Platform applications may take 1-5 months, depending on their complexity and features. For UI/UX design and other services, we strive to deliver promptly and efficiently, ensuring your project is completed in a timely manner.",
  },
  {
    id: 9,
    ques: "What kind of after-sales service does Unimax provide?",
    ans: "At Unimax, we prioritize customer satisfaction. We offer a complimentary one-month service period following project completion. During this time, if you encounter any bugs or anomalies in the delivered project, we will promptly address and resolve them at no additional cost. However, please note that this service covers bug fixes only and does not include new feature requests. Any feature enhancements or issues reported after the one-month service period will be subject to standard charges. Our commitment is to ensure your project's smooth operation and provide support whenever you need it.",
  },
  {
    id: 10,
    ques: "How can I trust that my project will be delivered successfully and my time won't be wasted?",
    ans: `We completely understand your concern. At Unimax, we are deeply committed to the success of your project. Our reputation is built on delivering exceptional results to our clients, and we take pride in maintaining a positive record on platforms like Google Reviews. Negative reviews are something we actively strive to avoid. Rest assured, we are dedicated to ensuring your project is completed to your satisfaction. Explore our portfolio to see our track record of successful projects. If you have any concerns, we're more than willing to discuss them and provide clarity through direct communication. Your project's success is our utmost priority.`,
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.border.main}`,

  "&:first-of-type": {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  "&:last-of-type": {
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
            key={index}
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
              <Typography
                sx={{ ...theme.typography.body2 }}
                dangerouslySetInnerHTML={{ __html: item.ans }}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
