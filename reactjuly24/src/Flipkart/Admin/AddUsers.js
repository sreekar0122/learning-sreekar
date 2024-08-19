import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { TextField, Button, MenuItem, Container, Typography, Paper, Box, Select, FormControl, InputLabel } from "@mui/material";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  displayName: Yup.string().required("Display Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.string().required("Role is required"),
  status: Yup.string().required("Status is required"),
});

function AddUsers() {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/roles');
        if (response.data && Array.isArray(response.data.roles)) {
          setRoles(response.data.roles);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
    fetchRoles();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    axios.post("http://localhost:3000/api/v1/users", values)
      .then(() => {
        alert("User successfully added!");
        navigate('/show');
        resetForm();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add user. Please try again.");
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Add New User
        </Typography>
        <Formik
          initialValues={{ displayName: "", email: "", username: "", password: "", role: "", status: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <Field
                  name="displayName"
                  as={TextField}
                  label="Display Name"
                  variant="outlined"
                  fullWidth
                  error={Boolean(<ErrorMessage name="displayName" />)}
                  helperText={<ErrorMessage name="displayName" />}
                />

                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  error={Boolean(<ErrorMessage name="email" />)}
                  helperText={<ErrorMessage name="email" />}
                />

                <Field
                  name="username"
                  as={TextField}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  error={Boolean(<ErrorMessage name="username" />)}
                  helperText={<ErrorMessage name="username" />}
                />

                <FormControl fullWidth>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Field
                    name="role"
                    as={Select}
                    labelId="role-label"
                    label="Role"
                    fullWidth
                    error={Boolean(<ErrorMessage name="role" />)}
                  >
                    <MenuItem value="">
                      <em>Select a Role</em>
                    </MenuItem>
                    {roles.map((role) => (
                      <MenuItem key={role._id} value={role._id}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Field>
                  <ErrorMessage name="role" component="div" className="error" />
                </FormControl>

                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={Boolean(<ErrorMessage name="password" />)}
                  helperText={<ErrorMessage name="password" />}
                />

                <FormControl fullWidth>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Field
                    name="status"
                    as={Select}
                    labelId="status-label"
                    label="Status"
                    fullWidth
                    error={Boolean(<ErrorMessage name="status" />)}
                  >
                    <MenuItem value="">
                      <em>Select Status</em>
                    </MenuItem>
                    <MenuItem value="true">Active</MenuItem>
                    <MenuItem value="false">Inactive</MenuItem>
                  </Field>
                  <ErrorMessage name="status" component="div" className="error" />
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}

export default AddUsers;
