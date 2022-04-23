import {ipcRenderer} from 'electron'
import IpcEvent from '../common/IpcEvent'
import type {ElectronApi} from '../main/ipc'

const electronApi: ElectronApi = {
  async logout() {
    localStorage.removeItem('upload')
    localStorage.removeItem('download')
    ipcRenderer.send(IpcEvent.logout)
  },
  showItemInFolder(fullPath: string) {
    return ipcRenderer.invoke(IpcEvent.shell_showItemInFolder, fullPath)
  },
  showOpenDialog(options) {
    return ipcRenderer.invoke(IpcEvent.dialog_showOpenDialog, options)
  },
}

export default electronApi