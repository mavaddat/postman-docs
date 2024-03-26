---
title: "Enterprise deployment"
updated: 2023-12-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Deploying Postman at Enterprise Scale"
    url: "https://blog.postman.com/deploying-postman-at-enterprise-scale/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 2: Information Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-part-2-information-management/"
---

> **[Postman app versioning and the Postman Enterprise App are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Postman Enterprise offers greater control to administrators looking to deploy and manage Postman at scale. Team Admins can choose to [manage Postman app versioning](#managing-postman-app-versioning) with Postman support, or [deploy the Postman Enterprise app](#deploying-the-postman-enterprise-app) to their organization.

## Contents

* [Managing Postman app versioning](#managing-postman-app-versioning)

* [Deploying the Postman Enterprise app](#deploying-the-postman-enterprise-app)

* [Downloading the Postman Enterprise app](#downloading-the-postman-enterprise-app)

* [Installing the Postman Enterprise Windows app](#installing-the-postman-enterprise-windows-app)

    * [INSTALLDIR](#installdir)
    * [The MSIINSTALLPERUSER option](#the-msiinstallperuser-option)
    * [Silent installation](#silent-installation)
    * [Enabling verbose logging for installation](#enabling-verbose-logging-for-installation)
    * [MSI installation options](#msi-installation-options)
    * [Updating the Postman Enterprise Windows app](#updating-the-postman-enterprise-windows-app)
    * [Uninstalling the Postman Enterprise Windows app](#uninstalling-the-postman-enterprise-windows-app)

* [Installing the Postman Enterprise macOS app](#installing-the-postman-enterprise-macos-app)

    * [Installing a PKG installer package](#installing-a-pkg-installer-package)
    * [Uninstalling PKG installers](#uninstalling-pkg-installers)
    * [PKG installation options](#pkg-installation-options)
    * [PKG installer logging](#pkg-installer-logging)

* [Installing the Postman Enterprise Linux app](#installing-the-postman-enterprise-linux-app)

    * [Encrypting data](#encrypting-data)
    * [Uninstalling the Postman Enterprise Linux app](#uninstalling-the-postman-enterprise-linux-app)

* [Login policy](#login-policy)

## Managing Postman app versioning

Postman app versioning enables you to set a team-wide version of Postman. You can choose to set Postman v8, Postman v9, or Postman v10 as your team's version. App versioning is a back-end operation and must be requested by a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

To request this change, reach out to your Postman Account Manager or [contact Postman support](https://www.postman.com/support/).

> Check out [Postman's release notes](https://www.postman.com/downloads/release-notes/) to compare app versions, or reach out to your Postman Admin for help in selecting your team's version.

## Deploying the Postman Enterprise app

Postman's Enterprise app is a variant of Postman’s Desktop app that offers greater control to administrators looking to deploy Postman at an enterprise level. It's available as an MSI package for Windows and PKG package for macOS, and supports silent installation, system-wide installation, and additional configurations to control how Postman is installed on users' devices.

## Downloading the Postman Enterprise app

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to access the Postman Enterprise app package.

To download the Postman Enterprise app, open Postman and select **Team** in the upper right, then **Team Settings > Enterprise application**.

<img alt="Postman Enterprise app download" src="https://assets.postman.com/postman-docs/v10/enterprise-app-download-v10.jpg" />

> Reach out to your Postman Admin or [contact Postman support](https://www.postman.com/support/) for help with the Postman Enterprise app.

## Installing the Postman Enterprise Windows app

Once you've downloaded the Postman Enterprise MSI package, you can move forward with installing the app.

### INSTALLDIR

The `INSTALLDIR` public property is used to select a custom installation directory. If this public property isn't manually overwritten, it defaults to `%PROGRAMFILES%\Postman\"Postman Enterprise"` for system-wide installations and `%USERPROFILE%\AppData\Local\Programs\Postman\"Postman Enterprise"` for per-user installations.

For example, you can run the following command to perform a system-wide installation to a custom directory:

``` shell
msiexec /i path/to/package.msi INSTALLDIR=C:\custom
```

### The MSIINSTALLPERUSER option

The standard `MSIINSTALLPERUSER` option is used to install the app per-user instead of system-wide. By default, the MSI performs a system-wide installation. Set `MSIINSTALLPERUSER` to `1` to perform a per-user installation.

For example, you can run the following command to perform a per-user installation to the default installation directory:

``` shell
msiexec /i path/to/package.msi MSIINSTALLPERUSER=1
```

This public property can be used with `INSTALLDIR` to perform a per-user installation to a custom directory:

``` shell
msiexec /i path/to/package.msi MSIINSTALLPERUSER=1 INSTALLDIR=%USERPROFILE%\custom
```

### Silent installation

A silent installation or uninstallation is performed by passing the `/qn` option to `msiexec`:

``` shell
msiexec /i path\to\package.msi /qn MSIINSTALLPERUSER=1
```

Running in silent installation mode will exclude error messages. If the installation fails for any reason, `%ERRORLEVEL%` won't equal `0` but no errors will display.

It's always recommended to [run silent installations with logging enabled](#enabling-verbose-logging-for-installation).

### Enabling verbose logging for installation

The `msiexec` tool can be configured to output debug log information about the installation process with the `/l*v` option. For example, you can output debug information to `C:\log.txt`:

``` shell
msiexec /i path\to\package.msi /l*v C:\log.txt
```

### MSI installation options

Settings can be changed during an MSI application installation.

For example, you can set the `TEAM_IDS` installation option to specify which Postman teams can use the Enterprise app:

``` shell
msiexec /i path\to\package.msi TEAM_IDS='1234'
```

You can also install an MSI with multiple installation options:

``` shell
msiexec /i path\to\package.msi MY_STRING_OPTION='hello' MY_INTEGER_OPTION=7
```

### Updating the Postman Enterprise Windows app

To upgrade the Postman Enterprise app, you can install the new version of the MSI package. Windows Installer will recognize this updated installation as an upgrade.

You must pass the exact same public properties that were used when you originally installed Postman Enterprise.

For example, if you first installed Postman Enterprise with the following, you must install the new MSI package in the same way:

``` shell
INSTALLDIR=C:\custom and MSIINSTALLPERUSER=1
```

> Downgrading the Postman Enterprise app isn't supported and attempts to do so will result in an error message. You can force a downgrade by manually removing the current version and then installing an earlier version of Postman Enterprise.

### Uninstalling the Postman Enterprise Windows app

The `msiexec` command-line tool can be used to remove an existing app using the `/x` option:

``` shell
msiexec /x path\to\package.msi
```

The app can also be removed from the Add/Remove Programs section in system settings or from the system Control Panel app.

## Installing the Postman Enterprise macOS app

macOS supports a flexible installer technology called PKG that can be installed without user intervention in scripting or enterprise deployment scenarios.

PKG installer packages have the following capabilities:

* You can select between system-wide, per-user installation, or custom installation disks.
* They don't require reboots after installation.
* They're fully configurable for silent installation.
* Apple silicon is supported.

### Installing a PKG installer package

To install a PKG installer, open the file and follow the interactive configurable wizard. PKGs can also be installed from a command-line interface using the `installer` tool included in macOS.

The `LocalSystem` target instructs the PKG to install app bundles to `/Applications` and store installation settings at `/Library/Preferences`:

``` shell
sudo installer -dumplog -verbose -pkg path/to/app.pkg -target LocalSystem
```

You can also perform a per-user installation by specifying the `CurrentUserHomeDirectory` target. Given this target, the PKG installs app bundles to `$HOME/Applications` and stores installation settings at `$HOME/Library/Preferences`:

``` shell
installer -dumplog -verbose -pkg path/to/app.pkg -target CurrentUserHomeDirectory
```

### Uninstalling PKG installers

A disadvantage of PKG installers is that macOS doesn't provide a standard mechanism to uninstall PKGs. However, the `pkgutil` tool included with macOS can be used to get information about the current PKGs installed on a system and the files that each installation created using the app bundle identifier.

If you don't know the bundle identifier of the app you want to uninstall, you can print the list of all the PKG bundle identifiers installed either system-wide or per-user:

``` shell
# For system-wide PKGs
pkgutil --volume / --packages
# For per-user PKGs
pkgutil --volume "$HOME" --packages
```

Given the app bundle identifier, you can list the files written by the PKG, relative to its installation root:

``` shell
# For system-wide PKGs
pkgutil --volume / --files <the bundle id>
# For per-user PKGs
pkgutil --volume "$HOME" --files <the bundle id>
```

You can remove the PKG by deleting the files printed out by these commands relative to `$HOME`, depending on if the PKG was installed system-wide or per user.

After removal, you must notify macOS that the PKG was removed:

``` shell
# For system-wide PKGs
sudo pkgutil --volume / --forget <the bundle id>
# For per-user PKGs
pkgutil --volume "$HOME" --forget <the bundle id>
```

### PKG installation options

Settings can be changed at installation time using the macOS `defaults` tool either before or after installing the PKG.

For example, you can set the `TEAM_IDS` installation option to specify which Postman teams can use the Enterprise app:

``` shell
# For system-wide PKGs
sudo defaults write /Library/Preferences/<the bundle id> TEAM_IDS -integer 1234
# For per-user PKGs
defaults write <the bundle id> TEAM_IDS -integer 1234
```

Installing a PKG and updating some of its installation options looks like this:

``` shell
sudo installer -dumplog -verbose -pkg path/to/app.pkg -target LocalSystem
sudo defaults write /Library/Preferences/<the bundle id> MY_STRING_OPTION -string "hello"
sudo defaults write /Library/Preferences/<the bundle id> MY_BOOLEAN_OPTION -boolean YES
sudo defaults write /Library/Preferences/<the bundle id> MY_INTEGER_OPTION -integer 7
```

### PKG installer logging

It's recommended to use the `-dumplog` and `-verbose` flags supported by `installer` to get detailed information about an installation. For example:

``` shell
sudo installer -dumplog -verbose -pkg path/to/app.pkg -target LocalSystem
```

## Installing the Postman Enterprise Linux app

The Postman Enterprise app supports the same [64-bit Linux systems](/docs/getting-started/installation/installation-and-updates/#install-postman-on-linux) as the Postman desktop app.

Before installing, ensure a clean installation:

``` shell
sudo snap remove postman-enterprise
```

Install the Postman Enterprise app with Snap:

``` shell
sudo snap install /path/to/postman-enterprise.snap --dangerous
```

The `--dangerous` option is required because the Postman Enterprise app isn't distributed through the Snap store. See the [Snap documentation](https://snapcraft.io/docs/install-modes#heading--dangerous) to learn more.

### Encrypting data

> This step is mandatory.

To securely store local data, you must connect the Snap password manager service interface to the Postman Enterprise app:

``` shell
sudo snap connect postman-enterprise:password-manager-service
```

### Uninstalling the Postman Enterprise Linux app

Use this command to uninstall the app:

``` shell
sudo snap remove postman-enterprise
```

## Login policy

You can specify which Postman teams can use the app with the `TEAM_IDS` option. For example, in Linux, if you want teams with IDs `1234` and `4321` to have access:

``` shell
sudo snap set postman-enterprise TEAM_IDS="1234, 4321"
```

> To get your Postman team ID, you can [contact Postman support](https://www.postman.com/support/) or contact your Postman Account Manager.

This configuration ensures that users must be signed in to a team you've specified in order to use the Postman Enterprise app. Users will only see the teams you've approved as options when signing in.

<img alt="Enterprise app sign in page" src="https://assets.postman.com/postman-docs/v10/sign-in-to-enterprise app-v10.21.jpg" width="500px"/>
