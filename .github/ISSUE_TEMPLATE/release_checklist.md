# Release Checklist ✍️

> These steps should be performed when making a new release on [monki-ui](https://github.com/Jacky-Summer/monki-ui).

## Deploy to Prod

- [ ] Create `release/${version-number}` from development branch and push to origin.
- [ ] Create `chore/bump-${version-number}` from above created `release/${version-number}`.
- [ ] Execute `yarn bump-version` to generate CHANGELOG in the `chore/bump-${version-number}` branch and push it to origin.
- [ ] Create a PR to merge `chore/bump-${version-number}` into `release/${version-number}`. ( if have Staging site, the release branch should automatically deployed to the Stag. This personal open source project —— [monki-ui](https://github.com/Jacky-Summer/monki-ui) doesn't have Staging site. )
- [ ] Create a PR to merge `release/${version-number}` into master branch, it will be automatically deployed in Prod.

## Post-release

- [ ] PR to merge back master to development.
- [ ] Create a release in GitHub, tag release version on the master branch and fill the content from corresponding CHANGELOG.
