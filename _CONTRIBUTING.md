# Contributing

## Detailed Workflow

### Fork the repo

Use github’s interface to make a fork of the repo, then add that repo as an upstream remote:

```
git remote add upstream https://github.com/MauriceOkumu/webResume
```

### Cut a namespaced feature branch from master

Your branch should follow this naming convention:
  - feat/...
  - test/...
  - doc/...
  - refactor/...
  - fix/...
  - build/...
  etc

These commands will help you do this:

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch.

Prefix each commit like so
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, make a new branch for those
changes.

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo.

First switch to your master branch and grab the latest updates from upstream

```bash
git checkout master
git pull --rebase upstream master
```

Then go back to your branch and rebase those changes to your branch:

```bash
git checkout `your-branch-name`
git rebase master
```

If a conflict arises between your new code and what exists on upstream,
git will yell at you to fix the conflicts. To get a better picture of what
conflicts you need to fix, type:

```bash
git status
```

To resolve any conflicts, simply delete the text that git inserted (the red highlighted text)
Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. If all conflicts are resolved,
the rebase should complete. Go back to master and merge your branch with your
master as follows:

```bash
git checkout master
git merge --ff-only `your-branch-name`
```

Before pushing to your repo, check to see if your master branch has a linear
commit history that is the same linear history of the upstream master, *plus*
the additional commits you have with:

```bash
git hist
```

Note: If you don't have the `git hist` alias, open your .gitconfig file and
add the following alias:
```bash
[alias]
  hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
```

Finally, push your code to your fork (origin/master). You will likely
run into difficulty pushing to your origin (i.e.
it says your local master has diverged from origin/master), so to successfully
push, type:

```bash
git push origin master -f
```

### Make a pull request

Select the drop down arrow next to the button and select the "Rebase and merge" option:
This should give us a nice, clean, linear history :)

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. Run the [tests][] before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist:

