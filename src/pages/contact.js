import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Layout from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import PageHeader from "../components/global/page-header";
import useServices from "../hooks/useServices";

const name = "Contact Us";
const ContactPage = () => {
  const [serviceName, setServiceName] = React.useState([]);
  const data = useServices();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const services = data?.allFile?.nodes.map(
    (item) => item.childMdx.frontmatter.title
  );

  return (
    <Layout>
      <MuiBreadCrumbs name={name} />
      <PageHeader
        name={name}
        desc="When it comes to online reviews, a high star rating isn’t enough to set your business apart from the competition. They want to know what exactly they liked so that they can gauge whether it aligns with their own preferences."
      />

      <Grid container sx={{ mx: "auto", maxWidth: 700 }} spacing={3}>
        <Grid item md={6}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Phone" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="demo-simple-select-standard-label">
              Services
            </InputLabel>
            <Select
              multiple
              value={serviceName}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
              input={<OutlinedInput label="Services" />}
            >
              {services.map((service) => (
                <MenuItem value={service}>
                  <Checkbox checked={serviceName.indexOf(service) > -1} />
                  <ListItemText primary={service} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Location" variant="outlined" />
        </Grid>
        <Grid item md={6}></Grid>
        <Grid item md={12}>
          <TextField label="Message..." multiline rows={4} fullWidth />
        </Grid>
        <Grid item md={12}>
          <Button fullWidth variant="blue">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactPage;
