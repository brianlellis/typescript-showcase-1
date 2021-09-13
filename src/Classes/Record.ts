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

type Profile = {
  name:     string,
  abbr:     string,
  address:  Address
}

export class Record {
  profile: Profile;

  constructor( public name: string , public abbr: string , public address: Address ) {
    this.profile = { name , abbr , address };
  }

  nameWithAbbr(): string { return `${this.name}: ${this.abbr}`; }

  printOutProfile( value: Profile ): void { console.log( value ); }
}