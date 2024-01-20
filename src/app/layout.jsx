import PropTypes from 'prop-types';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { Header } from '@/components';
import { Providers } from './providers';

import './global.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const RootLayout = ({ children }) => ((
  <html lang="en">
    <body>
      <AppRouterCacheProvider>
        <Providers>
          <Header />
          {children}
        </Providers>
      </AppRouterCacheProvider>
    </body>
  </html>
));

RootLayout.propTypes = propTypes;

export default RootLayout;
