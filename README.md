# Speech to Text starter kit [![](https://img.shields.io/badge/bluemix-powered-blue.svg)](https://bluemix.net)

The [Speech to Text](https://www.ibm.com/watson/services/speech-to-text/) service uses IBM's speech recognition capabilities to convert speech in multiple languages into text. The transcription of incoming audio is continuously sent back to the client with minimal delay, and it is corrected as more speech is heard.

![screenshot](screenshot.png)

## Getting started

### Run locally as Node.js application

1. To develop locally, first install [Node.js](https://nodejs.org) ([LTS](https://github.com/nodejs/Release) supported versions).

1. At the command line, go to your project directory.

1. Install the dependencies:

    ```sh
    npm install
    ```

1. Start the app:

    ```sh
    npm start
    ```

1. Point your browser to [http://localhost:3000](http://localhost:3000).

### Deploying to IBM Cloud as a CloudFoundry application

1. To deploy your project to IBM Cloud, you will need to install the [Bluemix CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started). Open a terminal and run the command that corresponds with your operating system:

    - MacOS

        ```sh
        sh <(curl -fsSL https://clis.ng.bluemix.net/install/osx)
        ```

    - Linux

        ```sh
        sh <(curl -fsSL https://clis.ng.bluemix.net/install/linux)
        ```

    - Windows Powershell

        Copy and paste the following command into a Windows PowerShell terminal console and execute it.
        ```sh
        iex(New-Object Net.WebClient).DownloadString('https://clis.ng.bluemix.net/install/powershell')
        ```

1. Set your API endpoint. Check the top right corner of your [IBM Cloud dashboard](https://console.bluemix.net/dashboard) to determine which of the following Regions your account is set to, then run the corresponding command to set your API Endpoint.

    - US South:

        ```sh
        bx api https://api.ng.bluemix.net
        ```

    - Germany:

        ```sh
        bx api https://api.eu-de.bluemix.net
        ```

    - Sydney:

        ```sh
        bx api https://api.au-syd.bluemix.net
        ```

    - United Kingdom:

        ```sh
        bx api https://api.eu-gb.bluemix.net
        ```

1. In your terminal go to your Project folder and run the following command to login to your IBM Cloud account with your IBM Cloud username and password.

    ```bash
    bx login
    ```

1. Push the app to IBM Cloud:

    ```bash
    bx app push
    ```
    The app will be deployed using the settings in your project's `manifest.yml` file.

1. Access your app at the URL specified in the command output.

    After your app is deployed, you can manage it from your [IBM Cloud dashboard](https://console.bluemix.net/dashboard/apps).

### Directory structure

```none
.
├── .bluemix                        // bluemix files
├── chart                           // helm chart files for Kubernetes
├── public                          // static resources
├── src                             // sample data
├── server                          // server app
│   ├── config                      // express configuration
│   ├── routers                      // express routers
│   ├── services                     // express services
|   └── server.js                    // entry point
├── test                             // tests
├── manifest.yml
├── package.json
└── views                           // react components
```

## Managing your project in the Watson Console

Select your project from the [Apps list](https://console.bluemix.net/developer/watson/apps) in the Watson developer console. From the project page, you can do the following:

    - Add additional services to your project
    - View documentation and credentials for your project's services
    - Configure a DevOps toolchain

## Running locally with Docker

1. Run the command that corresponds with your operating system to install the [IBM Cloud Developer Tools CLI](https://console.bluemix.net/docs/cloudnative/dev_cli.html):

    - MacOS or Linux:

        ```sh
        curl -sL https://ibm.biz/idt-installer | bash
        ```

    - Windows 10:

        ```sh
        Set-ExecutionPolicy Unrestricted; iex(New-Object Net.WebClient).DownloadString('http://ibm.biz/idt-win-installer')
        ```

1. Download and install [Docker](https://www.docker.com/).
1. If you installed any node dependencies into your project folder, remove them. Open a terminal and run the following command from your project folder, where your starter kit code is:

    ```sh
    rm -rf node_modules
    ```

1. Build the Docker container:

    ```sh
    bx dev build
    ```
    The build may take a few minutes to complete.

1. Run the Docker container:

    ```sh
    bx dev run
    ```

1. Point your browser to [localhost:3000](localhost:3000).

## License

  This sample code is licensed under Apache 2.0.

## Open Source @ IBM
  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)
