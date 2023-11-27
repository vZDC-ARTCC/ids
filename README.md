# vZDC IDS
The Virtual Washington ARTCC Information Display System is intended to simplify controlling the local and terminal environment.

### Setup
#### Prerequisites
- Node v18 or later
- NPM 9.6 or later
- **EMPTY** Relational Database (preferably Postgres)
- VATSIM Connect Keys (Development or Production)

#### Steps
Clone this repository:
```bash
git clone https://github.com/vZDC-ARTCC/ids vzdc_ids
```
Change directories:
```bash
cd vzdc_ids
```
Install dependencies:
```bash
npm i
```
In the root of the project, create a file called `.env.local` and configure your environment variables.

Use the `.env.example` file as a reference.

Environment Variables (all are required):
- `DEV_MODE`: If set to `true`, disables the VATUSA roster check and grants access to all pages regardless of rating.
- `DATABASE_URL`: URL for the database
- `NEXTAUTH_URL`: URL to specify where VATSIM should redirect users after a successful login.  This should just be the url without anything after `.com` `.org` etc.
- `NEXTAUTH_SECRET`: Secret key to encrypt tokens, this can be anything (hopefully secure).
- `VATSIM_CLIENT_ID`: Client ID for VATSIM Connect.
- `VATSIM_CLIENT_SECRET`: Client Secret for VATSIM Connect.
- `VATSIM_OAUTH_ENDPOINT`: When the VATSIM endpoint is located. (https://auth-dev.vatsim.net for development OR https://auth.vatsim.net for production)
- `VATUSA_FACILITY`: Name of the facility the IDS should check logged-in users against.
- `WEATHER_BRIEFING_VIDEO_LINK`: Link to the FAA Pre-Duty Weather Briefing Video for your ARTCC.

Migrate the database:
```bash
npm run db:deploy
```
#### Configuring

Navigate to the `facilities` directory to see all the ATCTs and TRACONS.

Facilities are built from the TRACON level, moving to TRACON AREA, and Fields.

Reference the PCT TRACON and the IAD ATCT as examples on how to configure all of your fields and TRACONS.

Once a TRACON has been configured correctly, add it to the `IDS_TRACON_FACILITIES` array in `facility/facilities.ts` file.

> You must re-seed the database if you make any changes to the configuration files.
> This will **permanently delete** anything content in the database

#### Development
Run the development server:
```bash
npm run dev
```
Navigate to http://localhost:3000/api/seed

> **COMMENT OUT THE ENTIRE `/app/api/seed/route.js` FILE AFTER YOU SEE THE SUCCESS MESSAGE**

Navigate to http://localhost:3000 and enjoy!

Developed by the vZDC ARTCC Web Team.