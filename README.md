# km-cli

## About

This project provides an easy solution for using [**gitmoji**](https://github.com/carloscuesta/gitmoji) from your command line. Gitmoji-cli solves the hassle of searching through the gitmoji list. Includes a bunch of options you can play with! :tada:

## Install

### npm

```bash
npm i -g gitkm-cli
```


## Usage

```bash
km --help
```

```
Fork from gitmoji repository, A km client for using emojis on commit messages.

  Usage
    $ km
  Options
    --init, -i      Initialize gitmoji as a commit hook
    --remove, -r    Remove a previously initialized commit hook
    --config, -g    Setup gitmoji-cli preferences.
    --commit, -c    Interactively commit using the prompts
    --list, -l      List all the available gitmojis
    --search, -s    Search gitmojis
    --version, -v   Print gitmoji-cli installed version
    --update, -u    Sync emoji list with the repo
```

### Commit

You can use the commit functionality in two ways, directly or via a commit-hook.

If you want to integrate `km-cli` in your project I would recommend going for the **hook mode** as it support more use cases, it's more flexible and has a better integration with other tools, whereas the **client mode** is more quick and easy to use.

#### Client

Start the interactive commit client, to auto generate your commit based on your prompts.

```bash
km -c
```

##### Options

You can pass default values to the prompts using the following flags:

- `title`: For setting the commit title.
- `message`: For setting the commit message.
- `scope`: For setting the commit scope.

Those flags should be used like this:

```bash
km -c --title="Commit" --message="Message" --scope="Scope"
```

#### Hook

Run the init option, add your changes and commit them, after that the prompts will begin and your commit message will be built.

```bash
km -i
git add .
git commit
```
