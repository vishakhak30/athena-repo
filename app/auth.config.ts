interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'wHSyTVMrrwHTYEGnuouX2WitvB3z2myW',
    domain: 'athena-test.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:3000/'
};
