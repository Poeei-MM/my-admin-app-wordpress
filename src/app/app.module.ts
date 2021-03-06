import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { ImageProvider } from '../providers/image/image';
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import { WordpressProvider } from '../providers/wordpress/wordpress';
import { WooProvider} from '../providers/woocommerce/woocommerce';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import {HttpClientModule} from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { AppState } from './app.global';
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    WordpressProvider,
    WooProvider,
    Push,
    ImagePicker,
	Base64,
	ImageProvider,
	File,
    Transfer,
    Camera,
    FilePath,
    FileTransfer,
    FileTransferObject,
    AppState,
    OneSignal
  ]
})
export class AppModule {}
