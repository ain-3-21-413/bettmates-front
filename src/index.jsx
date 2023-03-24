/* @refresh reload */
import { render, Show } from 'solid-js/web';

import './index.css';
import App from './App';
import PostsProvider from './providers/PostsProvider';
import UsersProvider from './providers/UsersProvider';
import PostProvider from './providers/PostProvider';
import UserProvider from './providers/UserProvider';
import ProfileProvider from './providers/ProfileProvider';
import { Router } from '@solidjs/router';
import EditorProvider from './providers/EditorProvider';
import CurrentPageProvider from './providers/CurrentPageProvider';
import AuthenticationProvider from './providers/AuthenticationProvider';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <AuthenticationProvider>
    <CurrentPageProvider>
      <PostsProvider>
        <UsersProvider>
          <PostProvider>
            <UserProvider>
              <ProfileProvider>
                <EditorProvider>
                  <Router>
                    <App />
                  </Router>
                </EditorProvider>
              </ProfileProvider>
            </UserProvider>
          </PostProvider>
        </UsersProvider>
      </PostsProvider>
    </CurrentPageProvider>
  </AuthenticationProvider>
), root);
