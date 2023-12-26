# vZDC IDS
The Virtual Washington ARTCC Information Display System is intended to simplify controlling the local and terminal environment.

### Setup
#### Prerequisites
- Node v18 or later
- NPM 9.6 or later
- **EMPTY** Relational Database (preferably Postgres)
- VATSIM Connect Keys (Development or Production) (redirect url should be `{NEXTAUTH_URL}/api/auth/callback/vatsim` replace `NEXTAUTH_URL` with the actual url in the environment variables)

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
- `DATABASE_URL`: URL for the database. Example: `postgres://postgres:password@localhost:5432/ids-db`
- `NEXTAUTH_URL`: URL to specify where VATSIM should redirect users after a successful login.  This should just be the url without anything after `.com` `.org` etc.  Example: `https://ids.vzdc.org`
- `NEXTAUTH_SECRET`: Secret key to encrypt tokens, this can be anything (hopefully secure).  Example: `anything`
- `VATSIM_CLIENT_ID`: Client ID for VATSIM Connect.
- `VATSIM_CLIENT_SECRET`: Client Secret for VATSIM Connect.
- `VATSIM_OAUTH_ENDPOINT`: When the VATSIM endpoint is located. (https://auth-dev.vatsim.net for development OR https://auth.vatsim.net for production)
- `VATUSA_FACILITY`: Name of the facility the IDS should check logged-in users against. Example: `ZDC`
- `WEATHER_BRIEFING_VIDEO_LINK`: Link to the FAA Pre-Duty Weather Briefing Video for your ARTCC.  Example: `https://www.weather.gov/media/zdc/PDWB/ZDC.mp4`

Migrate the database:
```bash
npm run db:deploy
```
Generate the Prisma Client:
```bash
npx prisma generate
```
#### Configuring

Navigate to the `facilities` directory to see all the ATCTs and TRACONS.

Facilities are built from the TRACON level, moving to TRACON AREA, and Fields.

Reference the PCT TRACON and the IAD ATCT as examples on how to configure all of your fields and TRACONS.

Once a TRACON has been configured correctly, add it to the `IDS_TRACON_FACILITIES` array in `facility/facilities.ts` file.

> [!WARNING]
> You must re-seed the database if you make any changes to the configuration files.
> Make sure you delete any data in the database or else the seed API will not work.

#### Development
Run the development server:
```bash
npm run dev
```
Navigate to http://localhost:3000/api/seed

Navigate to http://localhost:3000 and enjoy!

#### Production
Make sure you run the `npm run db:deploy` on your production database.

Build the project:
```bash
npm run build
```

Start the production server:
> [!IMPORTANT]
> Make sure environment variables on the server are configured correctly
```bash
npm run start
```

Seed the database (`/api/seed`) on your production URL.

##### Docker

After setting environment variables and configuring facilities correctly, run the `docker build` command:
> [!WARNING]
> Make sure `DATABASE_URL` is set in `.env` correctly.  The migration will not work during the build process if it is not set.
```bash
docker build -t ids .
```

Run the image:
```bash
docker run -p 80:80 ids
```
> [!IMPORTANT]
> The container will run on port 80, unlike the development server.

Developed by the vZDC ARTCC Web Team.
