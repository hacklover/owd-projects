import {ModuleApp} from "@owd-client/core/index";
import projectsStore from './store/index'
import projectsConfig from '~/../config/projects/config.json'

// window components
import WindowProjects from "./windows/WindowProjects.vue";
import WindowProjectACME from "./windows/WindowProjectACME.vue";

export default class ProjectsModule extends ModuleApp {
  loadModule() {
    return {
      name: "projects",
      singleton: true,
      config: projectsConfig,
      windows: [
        {
          component: WindowProjects,
          name: "WindowProjects",
          title: "Projects",
          icon: {
            name: "mdi-folder-outline",
            offset: {
              y: -1
            }
          },
          menu: true,
          minimized: false,
          size: {
            width: 448,
            height: 240
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          }
        },
        /*
        {
          component: WindowProjectACME,
          name: "WindowProjectACME",
          title: "Project ACME",
          icon: {
            name: "mdi-folder-outline",
            offset: {
              y: -1
            }
          },
          color: "#f53f3f",
          externalUrl: "https://acme.gov",
          menu: false,
          minimized: false,
          resizable: false,
          size: {
            width: 728,
            height: 510
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          },
          metaData: {
            iframeUrl: "https://acme.gov"
          }
        }
         */
      ]
    }
  }

  loadStore() {
    return projectsStore
  }

  loadCommands({store}) {
    return {
      'projects': function () {
        store.dispatch('core/window/windowOpen', 'WindowProjects');
      }
    }
  }
}