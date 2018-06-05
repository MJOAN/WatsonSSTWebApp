import React from 'react';
import {Header, Jumbotron, Footer} from 'watson-react-components';

export default function Layout(props) {
  return (
    <html>
      <body>
        <Header
          mainBreadcrumbs="Watson Speech to Text Starter"
          mainBreadcrumbsUrl="#"
          subBreadcrumbs="WatsonSpeechtoTextWebApp"
          subBreadcrumbsUrl="#"

        />
        <div id="root">
          {props.children}
        </div>
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
};
