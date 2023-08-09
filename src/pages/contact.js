import { Publish } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
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
import { ValidationError, useForm } from "@formspree/react";

const name = "Contact Us";
const ContactPage = () => {
  const [serviceName, setServiceName] = React.useState([]);
  const data = useServices();

  const [state, handleSubmit] = useForm(`${process.env.GATSBY_FORMSPREE_ID}`);

  console.log(state);

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
        desc="Get in touch with the Unimax Global team today. Whether you have questions about our services, need assistance with a project, or want to explore how we can help your business succeed in the digital landscape, we are here to support you. Our dedicated team is ready to provide personalized solutions and address your inquiries promptly."
      />

      <Grid
        container
        sx={{ mx: "auto", maxWidth: 700, px: 2 }}
        rowSpacing={3}
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid container item sm={12} spacing={3}>
          <Grid item sm={6} xs={12}>
            <TextField fullWidth label="Name" variant="outlined" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </Grid>
        </Grid>

        <Grid container item sm={12} spacing={3}>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-standard-label">
                Services
              </InputLabel>
              <Select
                name="services"
                multiple
                value={serviceName}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
                input={<OutlinedInput label="Services" />}
              >
                {services.map((service) => (
                  <MenuItem value={service} key={service}>
                    <Checkbox checked={serviceName.indexOf(service) > -1} />
                    <ListItemText primary={service} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <ValidationError
              prefix="Services"
              field="services"
              errors={state.errors}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Grid>
        </Grid>

        <Grid container item sm={12} spacing={3}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              name="location"
            />
            <ValidationError
              prefix="Location"
              field="location"
              errors={state.errors}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              name="file"
              fullWidth
              tabIndex="-1"
              label="Upload documents or images"
              InputProps={{
                disabled: true,
                endAdornment: (
                  <IconButton
                    aria-label="upload"
                    component="label" // THIS IS THE GENIUS CHANGE
                  >
                    <Publish />
                    <input hidden type="file" />
                  </IconButton>
                ),
              }}
            />
            <ValidationError prefix="File" field="file" errors={state.errors} />
          </Grid>
        </Grid>

        <Grid item sm={12} xs={12}>
          <TextField
            label="Message..."
            multiline
            rows={4}
            fullWidth
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Grid>

        <div
          className="g-recaptcha"
          data-sitekey={`${process.env.GATSBY_RECAPTCHA_SITE_KEY}`}
        ></div>

        <Grid item sm={12} xs={12}>
          <Button type="sumbit" fullWidth variant="blue">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <>
    <title>Contact Us | Get in Touch for Tailored IT Solutions</title>
  </>
);
