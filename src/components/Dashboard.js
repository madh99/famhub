import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


function Dashboard() {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Dashboard-Kacheln hier hinzufügen */}
<Grid item xs={12} sm={6} md={4}>
  <Card>
    <CardContent>
      <Typography variant="h6" component="h2">
        Einnahmen & Ausgaben
      </Typography>
      <Typography>Verwalte deine Einnahmen und Ausgaben...</Typography>
    </CardContent>
  </Card>
</Grid>

        </Grid>
      </Container>
    );
  }

export default Dashboard;