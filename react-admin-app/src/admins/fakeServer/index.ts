const fakeServer = (type: string) => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return import('./rest').then(factory => factory.default());
    }
};

declare global {
	interface Window {
		restServer: any;
	}
}

export default fakeServer;