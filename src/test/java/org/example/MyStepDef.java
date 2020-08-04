package org.example;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MyStepDef extends BasePage {

    Computer computer = new Computer();



    @Given("^I am on homepage$")
    public void i_am_on_homepage() {


    }

    @When("^I click on the computer category$")
    public void i_click_on_the_computer_category() {
        computer.Computer();



    }

    @When("^I click on desktop from computer category$")
    public void i_click_on_desktop_from_computer_category()  {
        computer.desktop();



    }

    @When("^I click on first product$")
    public void i_click_on_first_product() {
        computer.firstProduct();

    }



    @When("^I click on the Email a friend$")
    public void i_click_on_the_Email_a_friend()  {
        computer.EmailaFriend();

    }

    @When("^I enter the friend email address$")
    public void i_enter_the_friend_email_address()  {
        computer.friendemail();

    }

    @When("^I enter my email address$")
    public void i_enter_my_email_address() {
        computer.EnterMyemil();

    }

    @When("^I write the massage to friend Hope you doing well$")
    public void i_write_the_massage_to_friend_Hope_you_doing_well()  {
        computer.EnterMessage();

    }

    @When("^I click on the send email Button$")
    public void i_click_on_the_send_email_Button() {
        computer.sendEmail();

    }


    @Then("^I should able to buy product and send review for with massage successfully$")
    public void i_should_able_to_buy_product_and_send_review_for_with_massage_successfully() {
        String EmailaFriend = driver.findElement(By.cssSelector("html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/ul/li")).getText();
        Assert.assertEquals(EmailaFriend, "Only registered customers can use email a friend feature");
        System.out.println("i can not send a eamil");


    }


}



