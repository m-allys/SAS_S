#!/usr/bin/env python 
#-*- Coding: UTF-8 -*-

from scapy.all import *

def mainServer():
    arp = ARP()
    dhcp = DHCP()
    icmp = ICMP()
    dns = DNS()
    dnsqr = DNSQR()
    dot1 = Dot11()
    dot2 = Dot11Ack()
    gprs = GPRS()
    ether = Ether()
    icmpv6 = ICMPv6NDOptDstLLAddr()
    icmpv62 = ICMPv6MRD_Termination()
    ip22 = IPOption_Address_Extension()
    
    print ("DNS ", dns.show())
    print ("DNSQR", dnsqr.show())
    print ("DOT11", dot1.show())
    print ("DOT1122", dot2.show())

mainServer()
