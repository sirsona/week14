# Deployment notes

## What is the advantage of per-PR preview deploys?

They let you test changes before they go live, making it easier to find bugs and review new features.

## What is the risk of storing DB credentials in Vercel env vars?

If the credentials are leaked, someone could access your database.

## How would you rotate a leaked credential without downtime?

Create a new database credential, update the app to use it, deploy the change, and then remove the old credential.

## What happens if your hosted DB is down?

The app cannot load or save data, and users may see errors until the database is available again.
