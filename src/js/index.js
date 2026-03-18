import { createRoot } from 'react-dom/client';
import React, { Suspense } from 'react';

import '../css/style.css';
import Loading from '../component/loading';

// Lazy load the App component
const App = React.lazy(() => import('../component/app'));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<Suspense fallback={<Loading />}>
		<App />
	</Suspense>
);
