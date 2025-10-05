// Note: Install Node.js and run 'npm install' to resolve Angular dependencies
// For now, this is a placeholder routes file

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: 'HomeComponent' },
  { path: 'about', component: 'AboutComponent' },
  { path: 'services', component: 'ServicesComponent' },
  { path: 'contact', component: 'ContactComponent' },
  { path: '**', redirectTo: '/home' }
];
