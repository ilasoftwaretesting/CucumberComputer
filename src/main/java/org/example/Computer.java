package org.example;

import org.openqa.selenium.By;


public class Computer extends Utils {

    private By Computer=By.xpath("//a[@href='/computers']");
    private By Desktop=By.cssSelector("h2 [title='Show products in category Desktops']");
    private By clickOnFirstProduct = By.cssSelector("a[title='Show details for Build your own computer']");
    private By EmailaFriend = By.cssSelector("div[class='email-a-friend']");
    private By FriendaEmail = By.id("FriendEmail");
    String emailTimestamp = "Test"+timeStamp()+"@gmail.com";
    private By youremailaddress= By.id("YourEmailAddress");
    private By Personalmessage = By.id("PersonalMessage");
    private By SendEmail =By.cssSelector("div[class='buttons']");


    public void Computer() {
        ClickOnElement(Computer);
    }

    public void desktop(){
        waitForElementToBevisible(Desktop,20);
        ClickOnElement(Desktop);
        }

     public void firstProduct(){
         waitForElementToBevisible(clickOnFirstProduct,20);
        ClickOnElement(clickOnFirstProduct);
    }

    public void EmailaFriend() {
        waitForElementToBevisible(EmailaFriend, 20);
        ClickOnElement(EmailaFriend);
    }

     public void friendemail() {
        waitForElementToBevisible(FriendaEmail,20);
        enterText(FriendaEmail, "abcdefg@gmail.com");
     }

     public void EnterMyemil(){
         enterText(youremailaddress,emailTimestamp);
         }

      public void EnterMessage() {
          enterText(Personalmessage, "hope you and your family well");
      }
      public void sendEmail() {
          ClickOnElement(SendEmail);
      }


    }

