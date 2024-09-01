import React from 'react';
import { Container, TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';

function ContactPage() {
  return (
    <Container style={{ padding: '40px 0' }}>
      {/* Contact Form */}
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Send Message
          </Button>
        </Grid>
      </Grid>

      {/* Contact Information Cards */}
      <Grid container spacing={4} style={{ marginTop: '40px' }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1234 Main St, Anytown, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Email
              </Typography>
              <Typography variant="body2" color="text.secondary">
                contact@company.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Phone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +1 (234) 567-890
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactPage;
