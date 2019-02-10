#import necessary libraries
from lxml import html
import requests
#define web page to scrape and store html content
page = requests.get('https://www.iprospect.com/fi/fi/blogi/amazon/')
tree = html.fromstring(page.content)

#store desired content selectors in variables
titles = tree.xpath('//*/article/div/h3/a/text()')
dates = tree.xpath('//*/article/div/p/text()')
links = tree.xpath('//*/article/div/a/@href')
images = tree.xpath('//*/div/a/img/@data-interchange')

#empty lists for prettyfied image data
imageURLS = []

#prettify raw image data
images = [a.split(',') for a in images]
for b in range(0, len(images)):
    prettyImageURL = images[b][4].replace("['","")
    prettyImageURL = images[b][4].replace("[","")
    prettyImageURL = images[b][4].replace(" [h","h")
    imageURLS.append(prettyImageURL)

#print pretty scraped data for testing
for c in range(0, len(links)):
    print(imageURLS[c])
    print(links[c])
    print(dates[c])
    print(titles[c])
    print("")

#JSON write data in JSON format (no library needed) 
jsonListName = "blogPosts"
f = open("amazon.json", "w")
f.write('{"'+str(jsonListName)+'":[')
for i in range( 0, len(titles) ):
    if i < (len(titles)-1):
        f.write('{ "title":"'+str(titles[i].encode('utf-8'))+ '","link": "'+str(links[i])+'", "date": '+'"'+str(dates[i])+'", "imageURL": '+'"'+str(imageURLS[i])+'" },')
    #last row without ending comma
    else:
        f.write('{ "title":"'+str(titles[i].encode('utf-8'))+ '","link": "'+str(links[i])+'", "date": '+'"'+str(dates[i])+'", "imageURL": '+'"'+str(imageURLS[i])+'" }')
f.write("]}")
f.close()
