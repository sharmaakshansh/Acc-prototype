package com.springtransaction.springtransaction.entities;

//import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Transaction {

	@Id
	private long sellersId; 

private String sellersName;
private String sellersFathersName;
private String phoneNo;
private String addressOfProperty;
private String buyersName;
private String buyersFathersName;
private String buyersId;
private String buyersPhone;
public Transaction(long sellersId, String sellersName, String sellersFathersName, String phoneNo,
		String addressOfProperty, String buyersName, String buyersFathersName, String buyersId, String buyersPhone) {
	super();
	this.sellersId = sellersId;
	this.sellersName = sellersName;
	this.sellersFathersName = sellersFathersName;
	this.phoneNo = phoneNo;
	this.addressOfProperty = addressOfProperty;
	this.buyersName = buyersName;
	this.buyersFathersName = buyersFathersName;
	this.buyersId = buyersId;
	this.buyersPhone = buyersPhone;
}
public Transaction() {
	super();
	// TODO Auto-generated constructor stub
}
public long getSellersId() {
	return sellersId;
}
public void setSellersId(long sellersId) {
	this.sellersId = sellersId;
}
public String getSellersName() {
	return sellersName;
}
public void setSellersName(String sellersName) {
	this.sellersName = sellersName;
}
public String getSellersFathersName() {
	return sellersFathersName;
}
public void setSellersFathersName(String sellersFathersName) {
	this.sellersFathersName = sellersFathersName;
}
public String getPhoneNo() {
	return phoneNo;
}
public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}
public String getAddressOfProperty() {
	return addressOfProperty;
}
public void setAddressOfProperty(String addressOfProperty) {
	this.addressOfProperty = addressOfProperty;
}
public String getBuyersName() {
	return buyersName;
}
public void setBuyersName(String buyersName) {
	this.buyersName = buyersName;
}
public String getBuyersFathersName() {
	return buyersFathersName;
}
public void setBuyersFathersName(String buyersFathersName) {
	this.buyersFathersName = buyersFathersName;
}
public String getBuyersId() {
	return buyersId;
}
public void setBuyersId(String buyersId) {
	this.buyersId = buyersId;
}
public String getBuyersPhone() {
	return buyersPhone;
}
public void setBuyersPhone(String buyersPhone) {
	this.buyersPhone = buyersPhone;
}
@Override
public String toString() {
	return "Transaction [sellersId=" + sellersId + ", sellersName=" + sellersName + ", sellersFathersName="
			+ sellersFathersName + ", phoneNo=" + phoneNo + ", addressOfProperty=" + addressOfProperty + ", buyersName="
			+ buyersName + ", buyersFathersName=" + buyersFathersName + ", buyersId=" + buyersId + ", buyersPhone="
			+ buyersPhone + "]";
}
}

