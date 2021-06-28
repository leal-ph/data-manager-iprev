import { launch } from "puppeteer"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function generatePDF(html: string, type: string) {
  try {
    const browser = await launch()
    const page = await browser.newPage()
    await page.setContent(html)
    await page.pdf({
      path: `${type}.pdf`,
      format: "A4",
      printBackground: true,
      margin: { bottom: "75px", top: "30px" },
      displayHeaderFooter: false,
    })

    await browser.close()
    return 0
  } catch (err) {
    console.error(err)
    return 1
  }
}
