# indiatribaltours
India Tribal Tours
-------------------------------------------------------------------------------
-Install latest nodejs package.
-Clone the project from github.
-Open code in VS Code and perform 'npm install' to install all dependency packages.
-Install gulp package using 'npm install -g gulp@3.9.1' 
-Type the command to bypass security policy 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'
-In case you face 'primordials is not defined' error, then follow the below steps (A) & (B)
-(A)In the same directory where you have package.json create a npm-shrinkwrap.json file with the following contents:

    {
      "dependencies": {
        "graceful-fs": {
            "version": "4.2.10"
         }
      }
    }
-(B)Run npm install, and don't worry, it will update npm-shrinkwrap.json with a bunch of content.
-(OR)If your version is v16.14.0 or above, then you can override the version of graceful-fs by adding an overrides section in your package.json file:
"overrides": {
    "graceful-fs": "^4.2.10"
}
Cause of error:
---------------
In order to run gulp@3.9.1 we need to use graceful-fs@4.2.10 or else we need to upgrade gulp@4.0.0 and change the gulp syntax.
---------------
-Run gulp to start the project.
-gulp start:server


---------------------------------------
Process to host application to firebase:
---------------------------------------
-npm install -g firebase-tools
-firebase login
-firebase init
-firebase deploy

