export type Address = {
    street:   string,
    street_2: string,
    city:     string,
    state:    {
        full: string,
        abbr: string
    },
    zip:      string
}

export type Profile = {
    name:     string,
    abbr:     string,
    address:  Address
}

export class Record {
    profile: Profile;

    constructor( public name: string , public abbr: string , public address: Address ) {
      this.profile = { name , abbr , address };
    }

    printOutProfile( value: Profile ): void { console.log( value ); }
}