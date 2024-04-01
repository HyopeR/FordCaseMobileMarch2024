# Ford Otosan Case Mobile March 2024

### **Merhaba** 👋
- Projeye Environment yapılandırması ekledim. Test etmeden önce **.env** adından bir dosya oluşturup **.env.example** dosyasına göre düzenleyin ve github tokeninizi ekleyin.
- Test projesi kapsamında yer alan çoğu madde yapılmıştır.
- Proje typescript kullanarak hazırlamıştır.
- Proje genelde kendi projelerimde kullandığım bir mimariye sahip.
- Özel işlemlerin çoğunu (Pagination, Search, Storage) özel servisler kullanarak çözüm ürettim.


### **Eksik kısımlar**
- Projenin veritabanı ile ilgili kısmı süre aşımı sebebiyle yazılamamıştır.
- Projeye dahil edilmiş olan bu paketler **Typeorm** ve **react-native-quick-sqlite** bu işleri gerçekleştirmek için eklenmiştir ancak geliştirme yapılmamıştır.
- Dilerseniz veritabanı kullanmış olduğum örnek bir projeyi inceleyebilirsiniz.

Google: https://play.google.com/store/apps/details?id=com.cityzore.audioguide <br />
Apple: https://apps.apple.com/app/id1628086152


## Informations
- This document contains information about the project.

- The project was developed with **Typescript**.

- Brief information about the application content.
   - Environment configuration was done with **react-native-config**.
   - Http requests were made with integrated **axios**.
   - Made with **redux** for global state management.
   - Navigation operations were done with **react-navigation**.
   - Theme operations were done with **react-navigation**.
   - Various class services have been added in accordance with the Singleton and Factory design pattern to perform various tasks. **[Navigation, Storage, Paginator, Searcher, Connector]**


## Getting started
1. Clone the project.<br/>
   ```bash
   git clone https://github.com/HyopeR/FordCaseMobileMarch2024.git
   ```

2. Go to the root directory of the project.<br/>
   ```bash
   cd YOUR_PATH/FordCaseMobileMarch2024
   ```

3. Install project dependencies.<br/>
   ```bash
   npm install
   ```

4. Setting environment variables. Create **.env** file in the project's main directory. Fill this file according to the **.env.example** file.<br/>
   ```bash
   touch .env
   open .env
   ```

5. **[For Mac users only]** Install pods.<br/>
   ```bash
   cd ios
   pod install
   ```


## App preview
<table style="width: 100%">
  <tr>
    <th style="width: 33%">01-Ios Home</th>
    <th style="width: 33%">02-Ios Drawer</th>
    <th style="width: 33%">03-Ios Detail</th>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
</table>

<table style="width: 100%">
  <tr>
    <th style="width: 33%">04-Android Home</th>
    <th style="width: 33%">05-Android Drawer</th>
    <th style="width: 33%">06-Android Detail</th>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
</table>
